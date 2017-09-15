const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model('users');


passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleId: profile.id}).save();      

    }
  )
);

passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.spotifyClientID,
      clientSecret: keys.spotifyClientSecret,
      callbackURL: "http://localhost:3000/auth/spotify/callback"
    },
    (accessToken, refreshToken, profile, done) => {
    }
  )
);

      // console.log("access token", accessToken);
      // console.log("refresh token", refreshToken);
      // console.log("profile:", profile);

            // console.log("access token", accessToken);
      // console.log("refresh token", refreshToken);
      // console.log("profile:", profile);