const plantsController = require("../controllers/plants");
const express = require("express");
const auth = require("../helpers/auth");
const { valid } = require("joi");
let plants = express.Router();
const validate = require("../helpers/validation/validate")("plants");

plants.get("", validate, plantsController.getPlants); // plants?type=Ficus
plants.get("/types", validate, plantsController.getAllTypes);
// plants.get('/:type', validate, plantsController.getPlantsByType)
plants.post("", plantsController.addPlant);
plants.post("/:plantId", validate, plantsController.updatePlant);
// plants.post('/:plantId', validate, auth.authenticate, plantsController.updatePlant);
plants.delete(
  "/:plantId",
  validate,
  auth.authenticate,
  plantsController.deletePlant
);

module.exports = plants;
