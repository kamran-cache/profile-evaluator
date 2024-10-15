const mongoose = require("mongoose");

const awardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  mode: {
    type: String,
    enum: ["Online", "Offline", "Hybrid"],
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  issuingOrganization: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Award", awardSchema);
