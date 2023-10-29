FROM rust

WORKDIR /workspaces/cached

# Use another target directory to avoid conflicts with the host target directory
RUN mkdir /workspaces/target
ENV CARGO_TARGET_DIR=/workspaces/target \
    RTX_DATA_DIR=/workspaces/rtx \
    RTX_CACHE_DIR=$RTX_DATA_DIR/cache

COPY .rtx.toml pyproject.toml pdm.lock .pdm-python package.json pnpm-lock.yaml .npmrc .

# Install dependencies
RUN export DEBIAN_FRONTEND=noninteractive \
    && apt-get update \
    && apt-get -y install --no-install-recommends \
    bash make dirmngr gpg curl gawk \
    && apt-get clean \
    && cargo install rtx-cli \
    && echo 'eval "$(rtx activate bash)"' >> ~/.bashrc \
    && RTX_DEBUG=1 rtx install -y

ENTRYPOINT [ "/bin/bash"]
# CMD ["pnpm", "dev"]