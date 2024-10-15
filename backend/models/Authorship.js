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
  publicationDate: Date,
  summary: String,

  patentNumber: String,
  filingDate: Date,
  grantDate: Date,

  // book
  ISBN: String,
  edition: String,
  sales_distribution: String,
  translations: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Authorship", authorshipSchema);
