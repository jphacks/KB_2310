FROM rust

# Use another target directory to avoid conflicts with the host target directory
ENV PARENT=/workspaces \
    CARGO_TARGET_DIR=$PARENT/cargo \
    RTX_DATA_DIR=$PARENT/rtx \
    RTX_CACHE_DIR=$RTX_DATA_DIR/cache \
    PNPM_HOME=$PARENT/pnpm

WORKDIR $PARENT/cached

COPY .rtx.toml pyproject.toml pdm.lock .pdm-python package.json pnpm-lock.yaml .npmrc ./

# Install dependencies
RUN export DEBIAN_FRONTEND=noninteractive \
    && apt-get update \
    && apt-get -y install --no-install-recommends \
    bash make dirmngr gpg curl gawk \
    && apt-get clean \
    && mkdir -p $CARGO_TARGET_DIR $PNPM_HOME \
    && cargo install rtx-cli \
    && echo 'eval "$(rtx activate bash)"' >> ~/.bashrc \
    && RTX_DEBUG=1 rtx install -y

# Mark directories as volumes
VOLUME ["$RTX_DATA_DIR", "$CARGO_TARGET_DIR", "$PNPM_HOME"]

ENTRYPOINT [ "/bin/bash"]
# CMD ["pnpm", "dev"]