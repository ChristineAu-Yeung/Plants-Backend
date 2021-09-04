const Joi = require("joi");

const getPlants = Joi.object({});

const getAllTypes = Joi.object({});

const postPlants = Joi.object({
  name: Joi.string().required(),
  photos: Joi.array().optional(),
  type: Joi.string().required(),
});

const updatePlant = Joi.object({
  name: Joi.string().optional(),
  photos: Joi.array().optional(),
  type: Joi.string().optional(),
});

const deletePlant = Joi.object({
  plantId: Joi.string().required(),
});

module.exports = {
  get: {
    "": getPlants,
    "/types": getAllTypes,
  },
  post: {
    "": postPlants,
    "/:plantId": updatePlant,
  },
  delete: {
    "/:plantId": deletePlant,
  },
};
