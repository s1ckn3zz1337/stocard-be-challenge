module.exports = ({ ModelCity, ModelWeather }) => ({
  async getCityById(req, res, next) {
    const city = await ModelCity.getById(req.params.city_id);
    res.send(city.toDetailedJSON());
    return next();
  },
  async getCityByLanLng(req, res, next) {
    const { lan, lng } = req.query;
    const city = new ModelCity({ lan, lng });
    await city.fetchByLanLng();
    res.send(city.toJSON());
    return next();
  },

  async getWeatherByCityId(req, res, next) {
    const weather = new ModelWeather({ cityId: req.params.city_id });
    await weather.fetch();
    res.send(weather.toJSON());
    return next();
  },
});
