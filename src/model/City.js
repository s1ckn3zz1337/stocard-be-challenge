module.exports = ({ externalApiOpenWeather: { getCitiesByLngLat, getWeatherByCityId }, ModelWeather }) => class City {
  static async listAllByLngLat(lng, lat) {
    const results = [];
    try {
      const { list } = await getCitiesByLngLat(lng, lat);
      list.forEach(({ id, coord, name }) => {
        const city = new City({
          id, name, lat: coord.lat, lng: coord.lon,
        });
        results.push(city);
      });
      return results;
    } catch (err) {
      console.error('error parsing cities');
      throw err;
    }
  }

  static async getById(id) {
    try {
      const cityData = await getWeatherByCityId(id);
      const weather = ModelWeather.parseFromCityData({ cityId: id, ...cityData });
      const city = new City({
        id: cityData.id, name: cityData.name, weather, lng: cityData.coord.lon, lat: cityData.coord.lat,
      });
      return city;
    } catch (err) {
      console.error('error parsing cities');
      throw err;
    }
  }

  constructor({
    id, name, lat, lng,
    weather,
  }) {
    this.attributes = {
      id, name, lat, lng,
    };
    this.currentWeather = weather;
  }

  toDetailedJSON() {
    return this.attributes;
  }

  toJSON() {
    return { id: this.attributes.id, name: this.attributes.name };
  }
};
