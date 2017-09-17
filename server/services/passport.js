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
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.spotifyClientID,
      clientSecret: keys.spotifyClientSecret,
      callbackURL: "http://localhost:3000/auth/spotify/callback",
      response_type: "code",
      scope: "user-read-private, user-read-email",

      // state: state,
      proxy: true
    },
    async (accessToken, token_type, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ spotifyId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({
        spotifyId: profile.id,
        token_type,
        accessToken,
        refreshToken
      }).save();
      done(null, user);
    }
  )
);

// console.log("access token", accessToken);
// console.log("refresh token", refreshToken);
// console.log("profile:", profile);

// console.log("access token", accessToken);
// console.log("refresh token", refreshToken);
// console.log("profile:", profile);
