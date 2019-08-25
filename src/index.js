const { createContainer, asFunction, asValue } = require('awilix');
const Joi = require('@hapi/joi');
const restifyErrors = require('restify-errors');
const restify = require('restify');
const axios = require('axios');
const { routeCities } = require('./route');
const { ModelCity, ModelWeather } = require('./model');
const { validate, cities } = require('./middleware');
const { configApp } = require('./const');
const { externalApiOpenWeather } = require('./external');
const server = require('./server');

const container = createContainer();
container.register({
  axios: asValue(axios),
  Joi: asValue(Joi),
  restifyErrors: asValue(restifyErrors),
  restify: asValue(restify),

  server: asFunction(server).singleton(),

  configApp: asValue(configApp),

  ModelCity: asFunction(ModelCity),
  ModelWeather: asFunction(ModelWeather),

  validate: asFunction(validate),
  cities: asFunction(cities),

  externalApiOpenWeather: asFunction(externalApiOpenWeather),

  routeCities: asFunction(routeCities),

});

const app = container.resolve('server').start();

module.exports = app;
