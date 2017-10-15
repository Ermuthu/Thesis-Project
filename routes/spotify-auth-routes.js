const passport = require("passport");
const scopes = [
  "user-read-private",
  "user-read-email",
  "user-read-currently-playing",
  "user-read-playback-state"
];

module.exports = app => {
  app.get(
    "/auth/spotify",
    passport.authenticate("spotify", {
      scope: scopes,
      showDialog: true
    })
  );
  app.get(
    "/auth/spotify/callback",
    passport.authenticate("spotify"),
    (req, res) => {
      res.redirect("/home");
    }
  );
};
