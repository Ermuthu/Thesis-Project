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

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      const user = await new User({
        googleId: profile.id,
        displayName: profile.displayName,
        profile,
        accessToken,
        refreshToken
      }).save();
      done(null, user);
    }
  )
);

// const existingUser = await User.findOne({ accessToken: accessToken });
// if (existingUser) {
//   return done(null, existingUser);
// }
