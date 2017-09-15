const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

//user is a user model instance, we turn it in to an id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// search over collection of users, after finding user with that id, return done
passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
          // already have a googleId for user
        } else {
          // no user with this googleId, create one in mongo
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
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
      User.findOne({ spotifyId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
          // already have a spotifyId for user
        } else {
          // no user with this spotifyId, create one in mongo
          new User({ spotifyId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);

// console.log("access token", accessToken);
// console.log("refresh token", refreshToken);
// console.log("profile:", profile);

// console.log("access token", accessToken);
// console.log("refresh token", refreshToken);
// console.log("profile:", profile);
