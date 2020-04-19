const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    quater: { type: Number, required: true },
    code: { type: String, required: true },
    credits: { type: Number, required: true },
  },
  { timestamps: true }
);

mongoose.model("Subjects", subjectSchema);
