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

##Commiting

* code quality tools running as precommit such as lintting, duplicate, tests and outdate deps

```
yarn commit
```

## Open tasks

* add proper logging (debug log every function, error log not catched errors, json output, context for loggers)
* improve func naming
* improve error handling (add error codes, own error class et)
* add swagger doc
* create server from swagger doc
* add more JSDoc

* create Dockerfile
* create docker-compose files
* create K8S files