const supertest = require('supertest');
const nock = require('nock');
const app = require('../../src');

const request = supertest(app);

describe('test cities route', () => {
  descibe('test GET /cities route', () => {
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
  descibe('test GET /cities/{city_id} route', () => {
    it('should return right body and http 200 on success', async () => {
      nock('citystuff')
        .get('cityid')
        .reply(200, {});
      await request(app)
        .get('/cities')
        .expect('Content-Type', /json/)
        .expect(200, {
          id: 2873891,
          name: 'Mannheim',
          lat: 49.488331,
          lng: 8.46472,
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
  descibe('test GET /cities/{city_id}/weather route', () => {
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
