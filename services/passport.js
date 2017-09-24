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
      callbackURL:
        "https://salty-river-38974.herokuapp.com/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      new User({
        googleId: profile.id,
        accessToken,
        refreshToken
      }).save();
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
      console.log(profile._json.displayName);
    }
  )
);

passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.spotifyClientID,
      clientSecret: keys.spotifyClientSecret,
      callbackURL:
        "https://salty-river-38974.herokuapp.com/auth/spotify/callback"
    },
    (accessToken, refreshToken, playlists, profile, done) => {
      // console.log(accessToken);
      // console.log(refreshToken);
      // console.log(profile);
      // console.log(profile._json.display_name);
      // console.log(profile._json.images);
      // console.log(profile._json.images[0].url);
      User.findOne({ accessToken: accessToken }).then(existingUser => {
        if (existingUser) {
          return done(null, existingUser);
        } else {
          new User({
            spotifyId: profile.id,
            accessToken,
            refreshToken: refreshToken
            // profile._json.images[0].url
          })
            .save()
            .then(user => done(null, user));
          // done(null, ...profile, accessToken, refreshToken, user);
        }
      });
    }
  )
);

//     async (accessToken, token_type, refreshToken, profile, done) => {
//       const existingUser = await User.findOne({ googleId: profile.id });

//       if (existingUser) {
//         return done(null, existingUser);
//       }

//       const user = await new User({ googleId: profile.id }).save();
//       done(null, user);
//     }
//   )
// );

// console.log(accessToken);
// console.log(refreshToken);
//       console.log(profile);
//       console.log(profile._json.displayName);
//     async (accessToken, token_type, refreshToken, profile, done) => {
//       const existingUser = await User.findOne({ spotifyId: profile.id });

//       if (existingUser) {
//         return done(null, existingUser);
//       }

//       const user = await new User({
//         ...profile,
//         spotifyId: profile.id,
//         // image: profile.images[1].url,
//         // display_name: user.display_name,
//         // images: newUser.images[1].url,
//         token_type,
//         accessToken,
//         refreshToken
//       }).save();
//       done(null, ...profile, accessToken, refreshToken, user);
//     }
//   )
// );

// console.log("access token", accessToken);
// console.log("refresh token", refreshToken);
// console.log("profile:", profile);
