const mongoose = require("mongoose");

const meritSchema = new mongoose.Schema(
  {
    publicRecognition: {
      type: Boolean,
      required: true,
    },
    recognizedAsPublicFigure: {
      type: Boolean,
      required: function () {
        return this.publicRecognition;
      },
    },
    contributionsToNationalInterest: {
      type: Boolean,
      required: function () {
        return this.publicRecognition;
      },
    },
    activities: {
      type: [String],
      enum: ["Mentorship", "Volunteering", "Social Activities"],
    },
  },
  { timestamps: true }
);

const Merit = mongoose.model("Merit", meritSchema);

module.exports = Merit;
