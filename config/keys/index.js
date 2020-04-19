if (process.env.NODE_ENV === "productio") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
