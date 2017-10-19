const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

const youtubeAuthStrategy = passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await new User({
        googleId: profile.id,
        photos: profile.photos[0].value,
        emails: profile.emails[0].value,
        displayName: profile.displayName,
        profile,
        accessToken,
        refreshToken
      }).save();
      done(null, user);
    }
  )
);
