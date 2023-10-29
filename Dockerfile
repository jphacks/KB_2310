FROM rust AS develop

# Use another target directory to avoid conflicts with the host target directory
ENV PARENT="/workspaces" \
    CARGO_TARGET_DIR="$PARENT/cargo" \
    RTX_DATA_DIR="$PARENT/rtx" \
    RTX_CACHE_DIR="$RTX_DATA_DIR/cache" \
    PNPM_HOME="$PARENT/pnpm" \
    PNPM_STORE_DIR="$PNPM_HOME/store" \
    PDM_HOME="$PARENT/pdm"

WORKDIR /app

COPY .rtx.toml pyproject.toml pdm.lock .pdm-python package.json pnpm-lock.yaml .npmrc ./

# Install dependencies
RUN export DEBIAN_FRONTEND="noninteractive" \
    && apt-get update \
    && apt-get -y install --no-install-recommends \
    bash make git dirmngr gpg curl gawk \
    && mkdir -p "$CARGO_TARGET_DIR" "$PNPM_HOME" \
    && cargo install rtx-cli \
    && echo 'eval "$(rtx activate bash)"' >> ~/.bashrc \
    && RTX_DEBUG=1 rtx install -y \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Mark directories as volumes
VOLUME ["$CARGO_TARGET_DIR", "$RTX_DATA_DIR", "$PNPM_HOME", "$PDM_HOME"]

ENTRYPOINT [ "/bin/bash"]
# CMD ["pnpm", "dev"]