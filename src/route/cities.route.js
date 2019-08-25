module.exports = ({ validate }) => ([
  {
    location: '/cities',
    method: 'get',
    middlewares: [
      validate,
      // add getCities
    ],
  },
  {
    location: '/cities/$city_id',
    method: 'get',
    middlewares: [
      validate,
      cities
    ],
  },
  {
    location: '/cities/$city_id/weather',
    method: 'get',
    middlewares: [
      validate,
      // add getCity
      // add getWeather
    ],
  },
]);
