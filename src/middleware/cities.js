module.exports = ({ City, Weather }) => ({
  async getCityById(req, res, next) {
    const city = new City({ id: req.params.city_id });
    await city.fetchById();
    res.send(city.toDetailedJSON());
    return next();
  },
  async getCityByLanLng(req, res, next) {
    const { lan, lng } = req.query;
    const city = new City({ lan, lng });
    await city.fetchByLanLng();
    res.send(city.toJSON());
    return next();
  },

  async getWeatherByCityId(req, res, next) {
    const weather = new Weather({ cityId: req.params.city_id });
    await weather.fetch();
    res.send(weather.toJSON());
    return next();
  },
});
