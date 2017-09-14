const express = require("express");
const app = express();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;
const keys = require("./config/keys");

passport.use(new SpotifyStrategy());
passport.use(new GoogleStrategy());

passport.use(
  new GoogleStrategy(
    {
      googleClientID: keys.googleClientID,
      googleClientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

passport.use(
  new SpotifyStrategy(
    {
      spotifyClientID: keys.spotifyClientID,
      spotifyClientSecret: keys.spotifyClientSecret,
      callbackURL: "http://localhost:3000/auth/spotify/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

const PORT = process.env.PORT || 3000;
//express tells node to listen on port 3000
app.listen(PORT);
