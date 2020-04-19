const mongoose = require("mongoose");
const keys = require("../config/keys");
// mongodb://selectec:@hola1234@ds115263.mlab.com:15263/selectec
mongoose
  .connect(
    keys.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Mongoose connected correctly")
  )
  .catch((err) => console.log(err));
