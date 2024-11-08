const mongoose = require("mongoose");

const mainSchema = new mongoose.Schema({
  designation: { type: String },
  evidence: { type: String, default: null },
  evidenceType: { type: String },
  impact: { type: String },
  industry: { type: String },
  link: { type: String },
  linkedIn: { type: String },
  name: { type: String },
  organization: { type: String },
  position: { type: String },
  relationship: { type: String },
  topic: { type: String },
  type: { type: String },
});

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
    main: {
      type: [mainSchema],
    },
  },
  { timestamps: true }
);

const Merit = mongoose.model("Merit", meritSchema);

module.exports = Merit;
