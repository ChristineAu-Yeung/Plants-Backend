const plantsController = require('../controllers/plants');
const auth = require('../helpers/auth');
const express = require('express');
let users = express.Router();
const validate = require('../helpers/validation/validate')('users');

users.post('/login', auth.login); // /users/login
users.post('/signUp', auth.signUp);

module.exports = users;