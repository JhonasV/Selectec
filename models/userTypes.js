const mongoose = require("mongoose");

const userTypesSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

mongoose.model("UserTypes", userTypesSchema);
