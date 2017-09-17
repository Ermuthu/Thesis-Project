const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require('body-parser');
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/auth-routes")(app);
require("./routes/spotify-routes")(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`${PORT} is da bombski.. suhh~?`)
    }
});

app.get("*", function(req, res) {
  res.status(404).send({ message: "Oops! Not found." });
});

