const mongoose = require("mongoose");

const subjectScheduleSchema = mongoose.Schema(
  {
    subject: { type: mongoose.Types.ObjectId, required: true, ref: "Subjects" },
    scheduleDayOneInit: { type: String, required: true },
    scheduleDayOneEnd: { type: String, required: true },
    scheduleDayTwoInit: { type: String },
    scheduleDayTwoEnd: { type: String },
    dayOne: { type: String, required: true },
    dayTwo: { type: String },
    dayOneIsVirtual: { type: Boolean, default: false },
    dayTwoIsVirtual: { type: Boolean, default: false },
    modality: { type: Number, required: true, default: 0 },
    group: { type: String, required: true },
  },
  { timestamps: true }
);

mongoose.model("SubjectSchedule", subjectScheduleSchema);
