module.exports = () => class Weather {
  constructor({ cityId, weatherData }) {
    this.cityId = cityId;
    this.attributes = {};
    Object.entries(weatherData).forEach(([dataKey, dataValue]) => {
      this.attributes[dataKey] = dataValue;
    });
  }

  toJSON() {
    return this.attributes;
  }
};
