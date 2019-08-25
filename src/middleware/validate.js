module.exports = ({ Joi }) => (req, res, next) => {
  switch (req.path) {
    case 'cities':
      const citiesShema = {
        lng: Joi.number(),
        lat: Joi.number(),
      };
      const { error, value } = citiesShema.validate(req.query);
      if (error) {
        throw new Error(400, 'lat/lng required');
      }
      break;
    case 'cities/{city_id}':
      break;
    case 'cities/{city_id}/weather':
      break;
    default:
      throw new Error('not found');
  }
};
