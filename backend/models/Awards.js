const mongoose = require("mongoose");

const awardSchema = new mongoose.Schema({
  link: {
    type: String,
  },
  mode: {
    type: String,
    enum: ["online", "offline", "hybrid"],
  },

  title: {
    type: String,
  },
  //new awards data to store the main awards data
  awardName: {
    type: String,
    required: true,
  },
  issuingOrganization: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  scope: {
    type: String,
    enum: ["international", "national", "regional"],
    required: true,
  },
  criteria: {
    type: String,
  },
  nicheImpact: {
    type: String,
  },
  evidenceType: {
    type: String,
    enum: ["certificate", "press_release", "media_coverage", "testimonial"],
  },
  evidence: {
    type: String, // Storing file path or URL
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  experience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Experience",
  },
});

const Awards = mongoose.model("Awards", awardSchema);

module.exports = Awards;
