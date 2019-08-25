module.exports = ({ Joi, restifyErrors: { BadRequestError } }) => async (req, res, next) => {
  switch (true) {
    case /\/cities\/\d*\/weather/.test(req.url):
      break;
    case /\/cities\/\d*/.test(req.url):
      break;
    case /\/cities\?\w/.test(req.url) || /\/cities\/*/.test(req.url):
      const citiesShema = Joi.object({
        lng: Joi.number().required(),
        lat: Joi.number().required(),
      });
      const { error } = citiesShema.validate(req.query);
      if (error) {
        throw new BadRequestError('lat/lng required');
      }
      break;
    default:
      throw Error('not found');
  }
  return next();
};
