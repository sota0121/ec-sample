# EC Site Sample

## Get started

Run the following command to start the server.

```bash
make run
```

## Development

### Install dependencies

```bash
make install
```

### Run tests

```bash
make test
```

### Run linter

```bash
make lint
```

### Run formatter

```bash
make fmt
```

### Run server

```bash
make gen_env # setup .env file
make run
```

### Run server with hot reload

```bash
make dev
```

### Run server with debug mode

```bash
make debug
```

### Generate code automatically

```bash
make generate
```

## Setup for development

- [firebase-tools](https://firebase.google.com/docs/cli#install-cli-mac-linux)

```bash
npm install -g firebase-tools
```

## Start development

### Set ready for firebase

```bash
firebase login
firebase init # only first time
firebase use $PROJECT_ID # exec if you want to change project
```
