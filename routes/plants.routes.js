const plantsController = require('../controllers/plants');
const express = require('express');
let plants = express.Router();
const validate = require('../helpers/validation/validate')('plants');

plants.get('', validate, plantsController.getPlants);

module.exports = plants;

