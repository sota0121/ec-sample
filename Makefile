# Variables
FIREBASE_PROJECT_ID := "rakubuy-next"

# Commands
.PHONY: gen_env

gen_env:
	@cd web && cp .env.template .env
	@cd web && firebase apps:sdkconfig
	@echo "Copy the config and paste it to .env file"
