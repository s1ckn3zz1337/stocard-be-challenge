module.exports = ({ validate, cities }) => ([
  {
    location: '/cities',
    method: 'get',
    middlewares: [
      validate,
      cities.getCityByLanLng,
    ],
  },
  {
    location: '/cities/:city_id',
    method: 'get',
    middlewares: [
      validate,
      cities.getCityById,
    ],
  },
  {
    location: '/cities/:city_id/weather',
    method: 'get',
    middlewares: [
      validate,
      cities.getWeatherByCityId,
    ],
  },
]);
