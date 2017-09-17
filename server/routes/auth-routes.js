const passport = require("passport");

var scopes = 'user-read-email playlist-read-private playlist-modify-public user-library-read user-read-private'
module.exports = app => {
  app.get(
    "/auth/spotify",
    passport.authenticate("spotify", {
      scope: scopes,
      showDialogue: true
    })
  );
  app.get("/auth/spotify/callback", 
  passport.authenticate("spotify"),
  (req, res) => {
      res.redirect("/home");
    }
  );

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/home");
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
