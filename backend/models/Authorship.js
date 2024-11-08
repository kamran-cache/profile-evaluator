const mongoose = require("mongoose");

const authorshipSchema = new mongoose.Schema({
  authorshipType: {
    type: String,
    enum: ["Paper", "Book", "Patent"],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  authors: [String],
  publication: String,
  dateOfPublishing: Date,
  summary: String,

  patentNumber: String,
  patentRegistry: String,
  filingDate: Date,
  grantDate: Date,
  keyFeatures: String,
  impact: String,
  useCases: String,

  // book
  ISBN: String,
  edition: String,
  sales_distribution: String,
  translations: String,

  // evidence type and url
  evidenceType: String,
  evidence: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Authorship = mongoose.model("Authorship", authorshipSchema);

module.exports = Authorship;
