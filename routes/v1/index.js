module.exports = (app) => {
  require("./auth.route")(app);
  require("./career.route")(app);
  require("./subject.route")(app);
};
