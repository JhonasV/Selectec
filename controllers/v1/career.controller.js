const mongoose = require("mongoose");
const Career = mongoose.model("Careers");

exports.create = async (req, res, next) => {
  try {
    let career = await new Career(req.body).save();
    res.json(career);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  next();
};

exports.update = async (req, res, next) => {
  try {
    let { id } = req.params;
    let isUpdated = await Career.findByIdAndUpdate(id, req.body);
    res.json({ isupdated: true, career: isUpdated });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  next();
};

exports.get = async (req, res, next) => {
  try {
    let careers = await Career.find().populate("subjects");
    res.json(careers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  next();
};

exports.getOne = async (req, res, next) => {
  try {
    let { id } = req.params;
    let career = await Career.findById(id).populate("subjects");
    if (career === null) {
      res.status(204);
    } else {
      res.json(career);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  next();
};

exports.remove = async (req, res, next) => {
  try {
    let { id } = req.params;
    let isRemoved = await Career.findByIdAndRemove(id);
    res.json({ isremoved: true, career: isRemoved });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
