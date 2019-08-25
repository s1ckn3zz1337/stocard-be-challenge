/* eslint-disable camelcase */
module.exports = () => class Weather {
  static parseFromCityData({
    id, weather, sys: { sunrise, sunset }, main: {
      temp, pressure, humidity, temp_min, temp_max,
    }, clouds: { all }, wind: { speed },
  }) {
    return new Weather({
      cityId: id,
      weatherData: {
        type: weather[0].main,
        type_description: weather[0].description,
        sunrise: sunrise * 1000,
        sunset: sunset * 1000,
        temp,
        temp_min,
        temp_max,
        clouds_percent: all,
        wind_speed: speed,
        pressure,
        humidity,
      },
    });
  }

  constructor({
    cityId, weatherData: {
      type,
      type_description,
      sunrise,
      sunset,
      temp,
      temp_min,
      temp_max,
      pressure,
      humidity,
      clouds_percent,
      wind_speed,
    },
  }) {
    this.cityId = cityId;
    this.attributes = {
      type,
      type_description,
      sunrise,
      sunset,
      temp,
      temp_min,
      temp_max,
      pressure,
      humidity,
      clouds_percent,
      wind_speed,
    };
  }

  toJSON() {
    const attributes = { ...this.attributes };
    attributes.sunset = new Date(this.attributes.sunset).toISOString();
    attributes.sunrise = new Date(this.attributes.sunrise).toISOString();
    return attributes;
  }
};
