const express = require('express');
const userSong = express.Router();
const usersongsController = require('../controllers/usersongs-controller');

userSong.get('/', usersongsController.findUserSongs);

module.exports = userSong;
