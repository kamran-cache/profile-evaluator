const mongoose = require("mongoose");

const prSchema = new mongoose.Schema(
  {
    articleType: {
      type: String,
      required: true,
      enum: ["Online", "Print"],
    },
    title: {
      type: String,
      required: true,
    },
    publication: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PressRelease = mongoose.model("PressRelease", prSchema);

module.exports = PressRelease;
