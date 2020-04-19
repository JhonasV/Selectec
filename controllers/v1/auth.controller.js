const mongoose = require("mongoose");
const UserRepository = mongoose.model("Users");
const CareerRepository = mongoose.model("Careers");

exports.register = async (req, res, next) => {
  try {
    let userExists = await UserRepository.findOne({ email: req.body.email });

    if (userExists)
      return res.status(401).json({ message: "The email is in use" });

    const newUser = new UserRepository(req.body);
    const userCreated = await newUser.save();

    if (userCreated) {
      userCreated.career = await CareerRepository.findById(userCreated.career);
      res.json({
        token: userCreated.generateJWT(),
        user: userCreated,
      });
    } else {
      throw new Error("No fue posible el registro en este momento.");
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
  next();
};

exports.login = async (req, res, next) => {
  try {
    let user = await UserRepository.findOne({ email: req.body.email });

    if (!user)
      return res.status(401).json({ message: "email and/or password invalid" });

    if (!user.comparePassword(req.body.password))
      return res.status(401).json({ message: "email and/or password invalid" });

    user.career = await CareerRepository.findById(user.career);
    res.status(200).json({ token: user.generateJWT(), user: user });
  } catch (error) {
    res.status(500).json({ message: error });
  }

  next();
};

exports.currentUser = async (req, res, next) => {
  try {
    req.user.career = await CareerRepository.findById(req.user.career);

    res.json({ user: req.user });
  } catch (error) {
    res.status(500).json({ message: error });
  }

  next();
};
