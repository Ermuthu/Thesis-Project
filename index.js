const express = require("express");
const app = express();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;

// when incoming "/" request (req), respond (res) send json data
// arrow function called automatically every time request comes in
app.get("/", (req, res) => {
  res.send({
    songs: "test"
  });
});

const PORT = process.env.PORT || 9999;
//express tells node to listen on port 2600
app.listen(PORT);
