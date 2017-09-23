const _ = require("lodash");
const requireLogin = require("../middlewares/require-login");
var Spotify = require("node-spotify-api");
var SpotifyWebApi = require("spotify-web-api-node");
const mongoose = require("mongoose");

module.exports = app => {
  var spotify = new Spotify({
    id: "881e962deffc4409b2f70f70335737e3",
    secret: "af3a4abcae794901be83ff8610848c8b",
    redirectUri: "http://localhost:3000/callback"
  });
  app.get("/spotify", requireLogin, async (req, res) => {
    const users = await Users.find({ _user: req.user.id }).select({});

    res.send(users);
    console.log(users);
  });

  // app.get("/spotify", (req, res) => {
  //   spotify
  //     .request("https://api.spotify.com/v1/users/dmartss/playlists")
  //     .then(function(data) {
  //       console.log(data);
  //       req.body(data);
  //       data = data;
  //     })
  //     .catch(function(err) {
  //       console.error("Error occurred: " + err);
  //     });
  //   spotifyApi.setAccessToken("req.body.accessToken");
  // });
};
// var token = newUser.accessToken;

// app.get("/playlists", function(req, res) {
//   var state = generateRandomString(16);
//   res.cookie(stateKey, state);
//   // your application requests authorization
//   var scope = "playlist-read-private";
//   res.redirect(
//     "https://api.spotify.com/v1/me/playlists?" +
//       querystring.stringify({
//         access_token: token,
//         token_type: "Bearer",
//         response_type: "code",
//         client_id: client_id,
//         scope: scope,
//         redirect_uri: redirect_uri,
//         state: state
//       })
//   );
// });

//   app.get("/search", (req, res) => {
//     res.send(req.body);
//   });
// };

// 'https://api.spotify.com/v1/search?q=album:arrival%20artist:abba&type=album'

// var spotifyApi = new SpotifyWebApi({
//   clientId : '881e962deffc4409b2f70f70335737e3',
//   clientSecret : 'af3a4abcae794901be83ff8610848c8b',
// });
// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', { limit: 10, offset: 20 }, function(err, data) {
//   if (err) {
//     console.error('Something went wrong!');
//   } else {
//     console.log(data.body);
//   }
// });

// spotifyApi.getAlbums(["5U4W9E5WsYb2jUQWePT8Xm", "3KyVcddATClQKIdtaap4bV"]).then(
//   function(data) {
//     console.log("Albums information", data.body);
//   },
//   function(err) {
//     console.error(err);
// );
