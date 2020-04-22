const mongoose = require("mongoose");
const keys = require("../config/keys");

mongoose
  .connect(
    keys.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Mongoose connected correctly")
  )
  .catch((err) => console.log(err));
