const requireLogin = require("../middlewares/require-login");

const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/spotify",
    passport.authenticate("spotify", {
      scope: [
        "user-read-email playlist-read-private playlist-modify-public user-library-read user-read-private"
      ],
      showDialog: true
    }),
    function(req, res) {}
  );
  app.get(
    "/auth/spotify/callback",
    passport.authenticate("spotify"),
    (req, res) => {
      res.redirect("/home");
    }
  );

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      showDialog: true
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

  // app.get("/spotify", (req, res) => {
  //   res.send(req.user);
  //   console.log(req.user);
  // });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};