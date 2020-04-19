const authController = require("../../controllers/v1/auth.controller");
const { check } = require("express-validator");
const validate = require("../../middlewares/validate");
const authenticate = require("../../middlewares/authenticate");

module.exports = (app) => {
  app.post(
    "/api/v1/auth/register",
    [check("email").isEmail().withMessage("Enter a valid email address")],
    [check("names").notEmpty().withMessage("Campo Nombres requerido")],
    [check("lastnames").notEmpty().withMessage("Campo Apellidos requerido")],
    [check("password").notEmpty().withMessage("Campo Contraseña requerido")],
    validate,
    authController.register
  );
  app.post(
    "/api/v1/auth/login",
    [check("email").isEmail().withMessage("Enter a valid email address")],
    authController.login
  );
  app.get("/api/v1/auth/currentuser", authenticate, authController.currentUser);
};
