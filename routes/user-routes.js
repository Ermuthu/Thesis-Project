const express = require('express');
const userRoutes = express.Router();
const usersController = require('../controllers/users-controller');
//show users cards
userRoutes.get('/', authHelpers.loginRequired, usersController.index);

module.exports = userRoutes;