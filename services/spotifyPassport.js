const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

const spotifyAuthStrategy = passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.spotifyClientID,
      clientSecret: keys.spotifyClientSecret,
      callbackURL: "http://localhost:3000/auth/spotify/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await new User({
        spotifyId: profile.id,
        profile,
        accessToken,
        refreshToken
      }).save();
      done(null, user);
    }
  )
);
