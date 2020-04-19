const { subjectController } = require("../../controllers/v1");
const authenticate = require("../../middlewares/authenticate");
const validate = require("../../middlewares/validate");
const { check } = require("express-validator");
module.exports = (app) => {
  // name: { type: String, required: true, unique: true },
  // quater: { type: Number, required: true },
  // careers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Careers" }],
  // code: { type: String, required: true },
  // credits: { type: Number }
  app.post(
    "/api/v1/subjects/create",
    [
      check("name").notEmpty().withMessage("Name field is required"),
      check("code").notEmpty().withMessage("Code field is required"),
      check("quater").notEmpty().withMessage("Quater field is required"),
      check("credits").notEmpty().withMessage("Credits field is required"),
    ],
    validate,
    authenticate,
    subjectController.create
  );

  app.get("/api/v1/subjects/list", authenticate, subjectController.get);
  app.get("/api/v1/subjects/get/:id", authenticate, subjectController.getOne);

  app.delete(
    "/api/v1/subjects/remove/:id",
    authenticate,
    subjectController.remove
  );

  app.put(
    "/api/v1/subjects/update/:id",
    authenticate,
    subjectController.update
  );

  // Subject Schedule Routes
  app.post(
    "/api/v1/subjectschedules/create",
    [
      check("subject").notEmpty().withMessage("Subject field is required"),

      check("modality").notEmpty().withMessage("modality field is required"),
      check("dayOne").notEmpty().withMessage("dayOne field is required"),
      check("scheduleDayOneInit")
        .notEmpty()
        .withMessage("scheduleDayOneInit field is required"),
      check("scheduleDayOneEnd")
        .notEmpty()
        .withMessage("scheduleDayOneEnd field is required"),
      check("group").notEmpty().withMessage("group field is required"),
    ],
    validate,
    authenticate,
    subjectController.createSchedule
  );

  app.get(
    "/api/v1/subjectschedules/list",
    authenticate,
    subjectController.getSchedule
  );
  app.get(
    "/api/v1/subjectschedules/get/:id",
    authenticate,
    subjectController.getOneSchedule
  );
};
