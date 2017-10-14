const passport = require("passport");
const mongoose = require("mongoose");
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
