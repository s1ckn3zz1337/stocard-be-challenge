const { createContainer, asFunction, asValue } = require('awilix');
const Joi = require('@hapi/joi');
const restifyErrors = require('restify-errors');
const { routeCities } = require('./route');
const { modelCity, modelWeather } = require('./model');
const { validate } = require('./middleware');
const server = require('./server');


const container = createContainer();
container.register({
  Joi: asValue(Joi),
  restifyErrors: asValue(restifyErrors),

  server: asFunction(server).singleton(),

  modelCity: asFunction(modelCity),
  modelWeather: asFunction(modelWeather),

  validate: asFunction(validate),

  routeCities: asFunction(routeCities),

});

const app = container.resolve('server');

module.exports = app;
