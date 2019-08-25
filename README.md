# stocard-be-challenge

## First steps

* install all dependencies and run app in hot refresh mode

```
yarn
yarn dev
```

## Architecture

* uses awilix container for dependency injections
* uses axios for request/response
* all dependencies are registered at server start
* create routes and add them dynamically to server
* each route contains multiple middlewares
* each middleware does one simple task
* outbound API implementations are located in ./external
* domain models are located in domains

## Testing

* jest with supertest

```
yarn test
```

## Linting

* eslint with air-bnb-base

```
yarn lint
```

## Open tasks

* improve linting
* improve func naming
* improve error handling
* add swagger doc
* create server from swagger doc
* add more JSDoc
* add proper logging (debug, error, info etc)
* create Dockerfile
* create docker-compose files
* create K8S files