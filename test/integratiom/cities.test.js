const request = require('supertest');
const nock = require('nock');
const app = require('../../src');

const { configApp: { openWeather: { appId } } } = require('../../src/const');

const cityId = 2873891;
const rawCityData = {
  coord: {
    lon: 8.46,
    lat: 49.49,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 304.24,
    pressure: 1017,
    humidity: 31,
    temp_min: 303.15,
    temp_max: 305.37,
  },
  visibility: 10000,
  wind: {
    speed: 1.5,
  },
  clouds: {
    all: 0,
  },
  dt: 1566746872,
  sys: {
    type: 1,
    id: 1291,
    message: 0.0086,
    country: 'DE',
    sunrise: 1566707478,
    sunset: 1566757552,
  },
  timezone: 7200,
  id: cityId,
  name: 'Mannheim',
  cod: 200,
};

describe('test cities route', () => {
  describe('test GET /cities route', () => {
    it('should return 200 and expected body on succes if query is valid', async () => {
      nock('weatherstuff')
        .get('lat+lng')
        .reply(200, [{
          // citystuff
        }]);
      await request(app)
        .get('/cities?lat=121212&lng=121212122')
        .expect('Content-Type', /json/)
        .expect(200, [
          // citys here
        ]);
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
  });
  describe('test GET /cities/{city_id} route', () => {
    it.only('should return right body and http 200 on success', async () => {
      nock('https://api.openweathermap.org/')
        .get(`/data/2.5/weather?id=${cityId}&appid=${appId}`)
        .reply(200, rawCityData);
      await request(app)
        .get(`/cities/${cityId}`)
        .expect('Content-Type', /json/)
        .expect(200, {
          id: 2873891,
          name: 'Mannheim',
          lat: 49.49,
          lng: 8.46,
        });
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
  });
  describe('test GET /cities/{city_id}/weather route', () => {
    it('should return http 200 and right body on success', async () => {
      nock('citystuff')
        .get('city and weather stuff')
        .reply(200, {});
      await request(app)
        .get('/cities')
        .expect('Content-Type', /json/)
        .expect(200, {
          type: 'Clear',
          type_description: 'clear sky',
          sunrise: '2016-08-23T08:00:00.000Z',
          sunset: '2016-08-23T22:00:00.000Z',
          temp: 29.72,
          temp_min: 26.67,
          temp_max: 35,
          pressure: 1026,
          humidity: 36,
          clouds_percent: 0,
          wind_speed: 1.5,
        });
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
  });
});
