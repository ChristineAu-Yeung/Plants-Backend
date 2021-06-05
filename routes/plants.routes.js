const plantsController = require('../controllers/plants');
const express = require('express');
let plants = express.Router();

plants.get('', plantsController.getPlants);

module.exports = plants;

