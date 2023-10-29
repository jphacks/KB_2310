.PHONY: init
init:
	make clean
	docker compose build

.PHONY: clean
clean:
	docker compose down --rmi all --volumes --remove-orphans

.PHONY: install
install:
	rtx install -y && pnpm install && pdm install

.PHONY: dev
dev:
ifeq ($(shell docker compose ps -q dev),)
	@echo "No running container found for dev"
else
	docker compose down dev
endif
	docker compose up dev

.PHONY: unit
unit:
ifeq ($(shell docker compose ps -q test),)
	docker compose run --rm test npm run test
else
	@echo "No running container found for test"
endif

.PHONY: e2e
e2e:
ifeq ($(shell docker compose ps -q test),)
	docker compose run --rm test npm run test:e2e
else
	@echo "No running container found for test"
endif

.PHONY: bash
bash:
ifeq ($(shell docker compose ps -q dev),)
	docker compose run --rm dev /bin/bash
else
	@echo "No running container found for dev"
endif

.PHONY: deploy
deploy:
ifeq ($(shell docker compose ps -q deploy),)
	@echo "No running container found for deploy"
else
	docker compose down deploy
endif
	docker compose up -d deploy
