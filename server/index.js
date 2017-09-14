const express = require("express");
const authRoutes = require('./routes/auth-routes');
require("./services/passport");

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 3000;
//express tells node to listen on port 3000
app.listen(PORT);
