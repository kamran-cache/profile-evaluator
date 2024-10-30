const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Experience" },
  projectTitle: {
    type: String,
    required: true,
  },
  deliverables: { type: String },
  contribution: { type: String },
  benefitToCompany: { type: String },
  userImpact: { type: String },
  nicheImpact: { type: String },
  evidenceType: { type: String },
  evidence: { type: String },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
