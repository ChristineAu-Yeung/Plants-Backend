const Joi = require('joi');

const getPlants = Joi.object({});

module.exports = {
    "get": {
        "" : getPlants,
    }

}