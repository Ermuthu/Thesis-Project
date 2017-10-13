const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");
const spotifyAuthStrategy = require("./spotifyPassport");
const youtubeAuthStrategy = require("./youtubePassport");

//user is a user model instance, we turn it in to an id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// search over collection of users, after finding user with that id, return done
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// const existingUser = await User.findOne({ accessToken: accessToken });
// if (existingUser) {
//   return done(null, existingUser);
// }
