const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/User");
require("./services/passport");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 1 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));

require("./routes/auth-routes")(app);
require("./routes/spotify-routes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`${PORT} is da bombski.. suhh~?`);
  }
});

app.get("*", function(req, res) {
  res.status(404).send({ message: "ugh errors man.. amirite tho roflmao" });
});
