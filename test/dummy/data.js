const cityLng = 8.46;
const cityLat = 49.49;
const cityId = 2873891;
const cityListExpected = [{ id: 2873891, name: 'Mannheim' },
  { id: 2875376, name: 'Ludwigshafen am Rhein' },
  { id: 3220722, name: 'Stadtkreis Mannheim' },
  { id: 2924380, name: 'Friesenheim' },
  { id: 2864388, name: 'Neuostheim' },
  { id: 6555232, name: 'Altrip' },
  { id: 2956891, name: 'Altrip' },
  { id: 2864869, name: 'Neuhofen' },
  { id: 6555251, name: 'Neuhofen' },
  { id: 2933349, name: 'Edigheim' }];
const openWeatherCityListResponse = {
  message: 'accurate',
  cod: '200',
  count: 10,
  list: [
    {
      id: 2873891,
      name: 'Mannheim',
      coord: {
        lat: 49.49,
        lon: 8.46,
      },
      main: {
        temp: 304.14,
        pressure: 1017,
        humidity: 31,
        temp_min: 302.59,
        temp_max: 305.37,
      },
      dt: 1566745763,
      wind: {
        speed: 1.5,
      },
      sys: {
        country: 'DE',
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
    {
      id: 2875376,
      name: 'Ludwigshafen am Rhein',
      coord: {
        lat: 49.48,
        lon: 8.44,
      },
      main: {
        temp: 304.2,
        pressure: 1017,
        humidity: 31,
        temp_min: 302.59,
        temp_max: 305.37,
      },
      dt: 1566745763,
      wind: {
        speed: 1.5,
      },
      sys: {
        country: 'DE',
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
    {
      id: 3220722,
      name: 'Stadtkreis Mannheim',
      coord: {
        lat: 49.5,
        lon: 8.5,
      },
      main: {
        temp: 304.14,
        pressure: 1017,
        humidity: 31,
        temp_min: 302.59,
        temp_max: 305.37,
      },
      dt: 1566745887,
      wind: {
        speed: 1.5,
      },
      sys: {
        country: 'DE',
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
    {
      id: 2924380,
      name: 'Friesenheim',
      coord: {
        lat: 49.5,
        lon: 8.42,
      },
      main: {
        temp: 304.2,
        pressure: 1017,
        humidity: 31,
        temp_min: 302.59,
        temp_max: 305.37,
      },
      dt: 1566745854,
      wind: {
        speed: 1.5,
      },
      sys: {
        country: 'DE',
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
    {
      id: 2864388,
      name: 'Neuostheim',
      coord: {
        lat: 49.48,
        lon: 8.51,
      },
      main: {
        temp: 304.16,
        pressure: 1017,
        humidity: 31,
        temp_min: 302.59,
        temp_max: 305.37,
      },
      dt: 1566745848,
      wind: {
        speed: 1.5,
      },
      sys: {
        country: 'DE',
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
    {
      id: 6555232,
      name: 'Altrip',
      coord: {
        lat: 49.44,
        lon: 8.48,
      },
      main: {
        temp: 304.22,
        pressure: 1017,
        humidity: 31,
        temp_min: 302.59,
        temp_max: 305.37,
      },
      dt: 1566745941,
      wind: {
        speed: 1.5,
      },
      sys: {
        country: 'DE',
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
    {
      id: 2956891,
      name: 'Altrip',
      coord: {
        lat: 49.44,
        lon: 8.49,
      },
      main: {
        temp: 304.13,
        pressure: 1017,
        humidity: 31,
        temp_min: 302.59,
        temp_max: 305.37,
      },
      dt: 1566745793,
      wind: {
        speed: 1.5,
      },
      sys: {
        country: 'DE',
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
    {
      id: 2864869,
      name: 'Neuhofen',
      coord: {
        lat: 49.43,
        lon: 8.42,
      },
      main: {
        temp: 304.27,
        pressure: 1017,
        humidity: 31,
        temp_min: 303.15,
        temp_max: 305.37,
      },
      dt: 1566745790,
      wind: {
        speed: 1.5,
      },
      sys: {
        country: 'DE',
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
    {
      id: 6555251,
      name: 'Neuhofen',
      coord: {
        lat: 49.43,
        lon: 8.42,
      },
      main: {
        temp: 304.27,
        pressure: 1017,
        humidity: 31,
        temp_min: 303.15,
        temp_max: 305.37,
      },
      dt: 1566745790,
      wind: {
        speed: 1.5,
      },
      sys: {
        country: 'DE',
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
    {
      id: 2933349,
      name: 'Edigheim',
      coord: {
        lat: 49.53,
        lon: 8.38,
      },
      main: {
        temp: 304.2,
        pressure: 1017,
        humidity: 31,
        temp_min: 302.59,
        temp_max: 305.37,
      },
      dt: 1566745855,
      wind: {
        speed: 1.5,
      },
      sys: {
        country: 'DE',
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
  ],
};

const cityIdExpected = {};

const openWeatherCityIdResponse = {
  coord: {
    lon: 8.46,
    lat: 49.49,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 304.24,
    pressure: 1017,
    humidity: 31,
    temp_min: 303.15,
    temp_max: 305.37,
  },
  visibility: 10000,
  wind: {
    speed: 1.5,
  },
  clouds: {
    all: 0,
  },
  dt: 1566746872,
  sys: {
    type: 1,
    id: 1291,
    message: 0.0086,
    country: 'DE',
    sunrise: 1566707478,
    sunset: 1566757552,
  },
  timezone: 7200,
  id: cityId,
  name: 'Mannheim',
  cod: 200,
};

const cityIdWeatherExpected = {
  clouds_percent: 0,
  humidity: 31,
  pressure: 1017,
  sunrise: '2019-08-25T04:31:18.000Z',
  sunset: '2019-08-25T18:25:52.000Z',
  temp: 304.24,
  temp_max: 305.37,
  temp_min: 303.15,
  type: 'Clear',
  type_description: 'clear sky',
  wind_speed: 1.5,
};


module.exports = {
  ids: {
    cityId,
  },
  values: {
    cities: {
      cityLat,
      cityLng,
    },
  },
  expectedResponses: {
    cities: {
      cityIdWeatherExpected,
      cityListExpected,
      cityIdExpected,
    },

  },
  rawResponses: {
    openWeather: {
      openWeatherCityIdResponse,
      openWeatherCityListResponse,
    },
  },
};
