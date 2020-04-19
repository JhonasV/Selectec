const mongoose = require("mongoose");
const Subject = mongoose.model("Subjects");
const SubjectSchedule = mongoose.model("SubjectSchedule");

exports.create = async (req, res, next) => {
  try {
    let subject = await new Subject(req.body).save();
    res.json(subject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  next();
};

exports.update = async (req, res, next) => {
  try {
    let { id } = req.params;
    let isUpdated = await Subject.findByIdAndUpdate(id, req.body);
    res.json({ isupdated: true, subject: isUpdated });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  next();
};

exports.get = async (req, res, next) => {
  try {
    let subject = await Subject.find().populate("careers");
    res.json(subject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  next();
};

exports.getOne = async (req, res, next) => {
  try {
    let { id } = req.params;
    let subject = await Subject.findById(id).populate("careers");
    if (subject === null) {
      res.status(204);
    } else {
      res.json(subject);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  next();
};

exports.remove = async (req, res, next) => {
  try {
    let { id } = req.params;
    let isRemoved = await Subject.findByIdAndRemove(id);
    res.json({ isremoved: true, subject: isRemoved });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// SUBJECT SCHEDULE

exports.createSchedule = async (req, res, next) => {
  try {
    let subject = await new SubjectSchedule(req.body).save();
    res.json(subject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  next();
};

// exports.update = async (req, res, next) => {
//   try {
//     let { id } = req.params;
//     let isUpdated = await Subject.findByIdAndUpdate(id, req.body);
//     res.json({ isupdated: true, subject: isUpdated });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
//   next();
// };

exports.getSchedule = async (req, res, next) => {
  try {
    let subjects = await SubjectSchedule.find();

    // subjects.forEach(async (subj) => {
    //   subj.subject = await Subject.findById(subj.subject);
    // });
    // let newSubjects = [];
    // for (let subject in subjects) {
    //   subject.subject = await Subject.findById(subject.subject);
    //   newSubjects.push(subject);
    // }

    for (let i = 0; i < subjects.length; i++) {
      subjects[i].subject = await Subject.findById(subjects[i].subject);
    }

    res.json(subjects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  next();
};

exports.getOneSchedule = async (req, res, next) => {
  try {
    let { id } = req.params;
    let subject = await SubjectSchedule.findById(id).populate("Subjects");
    if (subject === null) {
      res.status(204);
    } else {
      res.json(subject);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  next();
};

exports.removeSchedule = async (req, res, next) => {
  try {
    let { id } = req.params;
    let isRemoved = await SubjectSchedule.findByIdAndRemove(id);
    res.json({ isremoved: true, subject: isRemoved });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
