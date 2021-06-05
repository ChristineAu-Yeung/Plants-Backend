const _ = require('lodash');
let Schemas = require('./schemas/index');

module.exports = (schemaToUse) => {
  // Joi validation options
  const _validationOptions = {
    abortEarly: false,  // abort after the last validation error
    allowUnknown: true, // allow unknown keys that will be ignored
    stripUnknown: true  // remove unknown keys from the validated data
  };
  let Schema = Schemas[schemaToUse]
  // return the validation middleware
  return (req, res, next) => {
    try{
      const route = req.route.path;
      const method = req.method.toLowerCase();
      if (_.has(Schema, method) && _.has(Schema[method], route)) {
        // get schema for the current route
        const _schema = _.get(Schema[method], route);
        if (_schema) {
          /**
           * Validate req.body and req.params using the schema and validation options 
           * NOTE: value overlap in params and body will lead to only value in body being validated 
           * */ 
          const { error, value } = _schema.validate({...req.params, ...req.body, ...req.query}, _validationOptions);
          if (error) {
            // Joi Error
            const JoiError = {
              status: 'FAILED',
              error: {
                original: error._object,
                // fetch only message and type from each error
                details: _.map(error.details, ({message, type}) => ({
                  message: message.replace(/['"]/g, ''),
                  type
                }))
              }
            };
            return res.status(400).json(JoiError);
          } else {
            // Replace req.body with the data after Joi validation
            req.body = value;
            return next();
          }
        }
      }
      throw new Error("Could not validate request")
    } catch (e) {
      console.error('validation error:', e);
      return res.status(400).json({error: e.message});
    }
  };
};