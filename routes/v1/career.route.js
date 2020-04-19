const { careerController } = require("../../controllers/v1");
const authenticate = require("../../middlewares/authenticate");
const validate = require("../../middlewares/validate");
const { check } = require("express-validator");
module.exports = (app) => {
  app.post(
    "/api/v1/careers/create",
    [
      check("name").notEmpty().withMessage("Name field is required"),
      check("code").notEmpty().withMessage("Code field is required"),
    ],
    validate,
    authenticate,
    careerController.create
  );

  app.get("/api/v1/careers/list", careerController.get);
  app.get("/api/v1/careers/get/:id", authenticate, careerController.getOne);

  app.delete(
    "/api/v1/careers/remove/:id",
    authenticate,
    careerController.remove
  );

  app.put("/api/v1/careers/update/:id", authenticate, careerController.update);
};
