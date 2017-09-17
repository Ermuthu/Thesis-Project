const spotify = require('../api/spotify');
const requireLogin = require("../middlewares/require-login");
var Spotify = require("node-spotify-api");
var SpotifyWebApi = require('spotify-web-api-node');

module.exports = app => {
  var spotify = new Spotify({
    id: "881e962deffc4409b2f70f70335737e3",
    secret: "af3a4abcae794901be83ff8610848c8b"
  });
  spotify
    .request("https://api.spotify.com/v1/users/dmartss/playlists")
    .then(function(data) {
      // console.log(data);
    })
    .catch(function(err) {
      // console.error("Error occurred: " + err);
    });
    
    app.get("/search", (req, res) => {
      res.send(req.body);
    });
    

};