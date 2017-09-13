const express = require('express');
const songRoutes = express.Router();

const songs = require('../controllers/songs-controller');

songRoutes.get('/', songs.index);

module.exports = songRoutes;