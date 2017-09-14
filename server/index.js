const express = require("express");
const app = express();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;
const keys = require('./config/keys');

passport.use(new SpotifyStrategy());
passport.use(new GoogleStrategy());


passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret;
  })
);


const PORT = process.env.PORT || 3000;
//express tells node to listen on port 3000
app.listen(PORT);
