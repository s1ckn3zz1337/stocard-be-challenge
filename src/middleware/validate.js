module.exports = ({ Joi }) => (req, res, next) => {
  switch (req.url) {
    case '/cities/{city_id}/weather':
      break;
    case '/cities/{city_id}':
      break;
    case '/cities':
      const citiesShema = Joi.object({
        lng: Joi.number(),
        lat: Joi.number(),
      });
      const { error, value } = citiesShema.validate(req.query);
      if (error) {
        throw new Error(400, 'lat/lng required');
      }
      break;

    default:
      //throw Error('not found');
  }
  return next();
};
