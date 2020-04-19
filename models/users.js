const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const currentDate = new Date();
const currentDateFormatted = `${currentDate.getFullYear()}${currentDate.getHours()}${currentDate.getMinutes()}`;
const usersSchema = mongoose.Schema(
  {
    collegeId: { type: String, default: currentDateFormatted },
    names: { type: String, required: true },
    lastnames: { type: String, required: true },
    userType: { type: mongoose.Schema.Types.ObjectId, ref: "UserTypes" },
    password: { type: String, required: true },
    email: { type: String, required: true },
    career: { type: mongoose.Schema.Types.ObjectId, ref: "Careers" },
  },
  { timestamps: true }
);

usersSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

usersSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

usersSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  let payload = {
    id: this._id,
    collegeId: this.collegeId,
    names: this.names,
    lastnames: this.lastnames,
    userType: this.userType,
    email: this.email,
    career: this.career,
  };

  return jwt.sign(payload, keys.JWT_SECRET_KEY, {
    expiresIn: parseInt(expirationDate.getTime() / 100, 10),
  });
};

mongoose.set("useFindAndModify", false);
mongoose.model("Users", usersSchema);
