const mongoose = require("mongoose");

const studentSubjectSchema = mongoose.Schema(
  {
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subjects",
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    completed: { type: Boolean, default: false },
    coursed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

mongoose.model("StudentSubject", studentSubjectSchema);
