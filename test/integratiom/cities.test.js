const request = require('supertest');
const nock = require('nock');
const app = require('../../src');

const { configApp: { openWeather: { appId } } } = require('../../src/const');

const {
  ids: { cityId },
  values: { cities: { cityLng, cityLat } },
  expectedResponses: { cities: { cityListExpected, cityIdWeatherExpected, cityIdExpected } },
  rawResponses: { openWeather: { openWeatherCityIdResponse, openWeatherCityListResponse } },
} = require('../dummy/data');


describe('test cities route', () => {
  afterAll((done) => {
    app.close(done);
  });
  describe('test GET /cities route', () => {
    it('should return 200 and expected body on succes if query is valid', async () => {
      nock('https://api.openweathermap.org/')
        .get(`/data/2.5/find?lat=${cityLat}&lon=${cityLng}&appid=${appId}`)
        .reply(200, openWeatherCityListResponse);
      await request(app)
        .get(`/cities?lat=${cityLat}&lng=${cityLng}`)
        .expect('Content-Type', /json/)
        .expect(200, cityListExpected);
    });
    it('should return 400 if lat param is missing', async () => {
      await request(app)
        .get('/cities')
        .expect('Content-Type', /json/)
        .expect(400, {
          code: 'BadRequestError',
          message: 'lat/lng required',
        });
    });
    it('should return 400 if lng param is missing', async () => {
      await request(app)
        .get('/cities')
        .expect('Content-Type', /json/)
        .expect(400, {
          code: 'BadRequestError',
          message: 'lat/lng required',
        });
    });
    it('should return 204 on no result', async () => {
      nock('weatherstuff')
        .get('lat+lng')
        .reply(200, []);
      await request(app)
        .get('/cities')
        .expect('Content-Type', /json/)
        .expect(204, []);
    });
    it('should return 500 on error', async () => {

    });
  });
  describe('test GET /cities/{city_id} route', () => {
    it('should return right body and http 200 on success', async () => {
      nock('https://api.openweathermap.org/')
        .get(`/data/2.5/weather?id=${cityId}&appid=${appId}`)
        .reply(200, openWeatherCityIdResponse);
      await request(app)
        .get(`/cities/${cityId}`)
        .expect('Content-Type', /json/)
        .expect(200, cityIdExpected);
    });
    it('should return 404 if city not found', async () => {
      nock('citystuff')
        .get('cityid')
        .reply(404, {});
      await request(app)
        .get('/cities')
        .expect('Content-Type', /json/)
        .expect(404, {
          code: 'NotFoundError',
          message: 'not found',
        });
    });
    it('should return 500 on error', async () => {

    });
  });
  describe('test GET /cities/{city_id}/weather route', () => {
    it('should return http 200 and right body on success', async () => {
      nock('https://api.openweathermap.org/')
        .get(`/data/2.5/weather?id=${cityId}&appid=${appId}`)
        .reply(200, openWeatherCityIdResponse);
      await request(app)
        .get(`/cities/${cityId}/weather`)
        .expect('Content-Type', /json/)
        .expect(200, cityIdWeatherExpected);
    });
    it('should return http 404 on not found', async () => {
      nock('citystuff')
        .get('city and weather stuff')
        .reply(404);
      await request(app)
        .get('/cities')
        .expect('Content-Type', /json/)
        .expect(404, {
          code: 'NotFoundError',
          message: 'not found',
        });
    });
    it('should return http 500 on error', async () => {

    });
  });
});
