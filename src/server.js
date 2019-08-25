// todo create server and register routes
module.exports = ({
  restify,
  routeCities,
  restifyErrors: { HttpError, InternalServerError },
  configApp: {
    global: { port },
  },
  packageJson,
}) => {
  class Server {
    promisifyMiddleware(handler) {
      return (req, res, next) => {
        Promise.resolve().then(
          () => handler(req, res, next),
        ).then(
          (result) => {
            next(result);
          },
          // emit error which we listen and do error handling there
          (error) => {
            // todo use own error code
            this.server.emit('exceptionThrown', req, res, handler, error);
          },
        );
      };
    }

    addRoutes(allRoutes) {
      allRoutes.forEach((domainRoute) => {
        domainRoute.forEach((singleRoute) => {
          const asyncMiddlewares = singleRoute.middlewares.map(
            (middleware) => this.promisifyMiddleware(middleware),
          );
          this.server[singleRoute.method](singleRoute.location, asyncMiddlewares);
        });
      });
    }

    start() {
      // todo use values from package.json & add dev conf
      this.server = restify.createServer({
        name: packageJson.name,
        version: packageJson.version,
      });

      this.server.use(restify.plugins.acceptParser(this.server.acceptable));
      this.server.use(restify.plugins.queryParser());
      this.server.use(restify.plugins.bodyParser());
      this.server.on('exceptionThrown', (req, res, route, err) => {
        // this is fired second.
        const error = err instanceof HttpError ? err : new InternalServerError('Hoops looks like something went wrong :(');
        res.send(error.statusCode, { message: error.message, code: error.name });
      });

      this.addRoutes([routeCities]);

      this.server.listen(port, () => {
        console.log('%s listening at %s', this.server.name, this.server.url);
      });
      this.server.use((req, res, next) => {
        res.setHeader('content-type', 'application/json');

        next();
      });
      return this.server;
    }
  }
  return new Server();
};
