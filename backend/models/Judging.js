const mongoose = require("mongoose");

const judgingSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Judging = mongoose.model("Judging", judgingSchema);

module.exports = Judging;
