// todo create server and register routes
module.exports = ({ restify, routeCities, restifyErrors: { HttpError, InternalServerError } }) => {
  class Server {
    start() {
      // todo use values from package.json & add dev conf
      const server = restify.createServer({
        name: 'myapp',
        version: '1.0.0',
        handleUncaughtExceptions: true,
      });

      server.use(restify.plugins.acceptParser(server.acceptable));
      server.use(restify.plugins.queryParser());
      server.use(restify.plugins.bodyParser());
      server.on('uncaughtException', (req, res, route, err) => {
        // this is fired second.

        res.send(err instanceof HttpError ? err : new InternalServerError(err));
      });

      this.addRoutes(server, [routeCities]);

      server.listen(8080, () => {
        console.log('%s listening at %s', server.name, server.url);
      });
      return server;
    }

    addRoutes(server, allRoutes) {
      allRoutes.forEach((domainRoute) => {
        domainRoute.forEach((singleRoute) => {
          server[singleRoute.method](singleRoute.location, singleRoute.middlewares);
        });
      });
    }
  }
  return new Server();
};
