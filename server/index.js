const express = require("express");
const app = express();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;
const keys = require("./config/keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.spotifyClientID,
      clientSecret: keys.spotifyClientSecret,
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
