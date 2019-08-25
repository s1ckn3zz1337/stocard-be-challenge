module.exports = ({ ModelCity }) => ({
  async getCityById(req, res, next) {
    const city = await ModelCity.getById(req.params.city_id);
    res.send(city.toDetailedJSON());
    return next();
  },
  async getCityByLanLng(req, res, next) {
    const { lat, lng } = req.query;
    const cities = (await ModelCity.listAllByLngLat(lng, lat)).map((city) => city.toJSON());
    res.send(cities);
    return next();
  },

  async getWeatherByCityId(req, res, next) {
    const city = await ModelCity.getById(req.params.city_id);
    const weather = city.currentWeather;
    res.send(weather.toJSON());
    return next();
  },
});
