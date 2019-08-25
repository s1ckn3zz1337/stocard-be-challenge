module.exports = ({ axios, configApp: { openWeather: { appId } } }) => {
  const { get } = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
  });
  return {
    /**
       * https://openweathermap.org/current#cycle
       * @param lng length °
       * @param lat lat °
       * @returns {Promise<*>} resolves with raw weather data
       */
    getCitiesByLngLat: async (lng, lat) => {
      try {
        const { data } = await get('/find', {
          params: {
            lat,
            lon: lng,
            appid: appId,
          },
        });
        return data;
      } catch (err) {
        console.error('could not load city by lng lat', err);
        throw (err);
      }
    },

    /**
       *  https://openweathermap.org/current#cityid
       * @param id cityId
       * @returns {*}
       */
    getWeatherByCityId: async (id) => {
      try {
        const { data } = await get('/weather', {
          params: {
            id,
            appid: appId,
          },
        });
        return data;
      } catch (err) {
        console.log('could not load weather by city id');
        throw err;
      }
    },
  };
};
