const express = require("express");
const app = express();
const morgan = require("morgan");
const passport = require("passport");
const key = require("./config/keys");
// Middlewares
app.use(express.json());
app.use(morgan("dev"));
// Database connection
require("./data/connectionDb");
// Models
require("./models");
// passport init
app.use(passport.initialize());
require("./middlewares/jwt")(passport);
// Routes
require("./routes/v1")(app);

// Server init
app.listen(key.SERVER_LISTENING_PORT, () =>
  console.log(`Server is listening on port ${key.SERVER_LISTENING_PORT}`)
);
