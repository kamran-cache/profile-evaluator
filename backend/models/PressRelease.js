const mongoose = require("mongoose");

const prSchema = new mongoose.Schema(
  {
    articleType: {
      type: String,

      enum: ["Online", "Print"],
    },
    title: {
      type: String,
      required: true,
    },
    publication: {
      type: String,
    },
    publicationDate: Date,
    link: String,
    author: String,
    industry: String,
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const PressRelease = mongoose.model("PressRelease", prSchema);

module.exports = PressRelease;
