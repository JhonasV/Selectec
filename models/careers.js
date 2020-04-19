const mongoose = require("mongoose");

const careersSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    code: { type: String, require: true, unique: true },
    // subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subjects" }],
  },
  { timestamps: true }
);

mongoose.model("Careers", careersSchema);
