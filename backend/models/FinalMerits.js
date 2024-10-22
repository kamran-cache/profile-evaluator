const mongoose = require("mongoose");

const meritSchema = new mongoose.Schema(
  {
    publicFigure: {
      type: Boolean,
    },
    nationalInterest: {
      type: Boolean,
    },
    contributions: {
      type: [String],
      enum: ["mentorship", "volunteering", "socialActivities"],
    },
  },
  { timestamps: true }
);

const Merit = mongoose.model("Merit", meritSchema);

module.exports = Merit;
