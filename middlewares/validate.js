const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    let error = {};
    errors.array().map((e) => (error[e.param] = e.msg));
    return res.status(400).json({ error });
  }
  next();
};
