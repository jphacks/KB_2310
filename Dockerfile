FROM rust

WORKDIR /workspaces/cached

# Use another target directory to avoid conflicts with the host target directory
RUN mkdir /workspaces/target
ENV CARGO_TARGET_DIR=/workspaces/target

COPY . .

# Install rust tools
RUN rustup component add clippy llvm-tools rustfmt
RUN cargo install cargo-insta cargo-llvm-cov rtx-cli

# Install dependencies
RUN export DEBIAN_FRONTEND=noninteractive \
    && apt-get update \
    && apt-get -y install --no-install-recommends \
    bash direnv make \
    && apt-get clean \
    && echo 'eval "$(rtx activate bash)"' >> ~/.bashrc \
    && rtx install \
    && pnpm install \
    && pdm install

ENTRYPOINT [ "/bin/bash"]
CMD ["pnpm", "dev"]