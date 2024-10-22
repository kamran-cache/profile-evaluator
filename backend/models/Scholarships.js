const mongoose = require("mongoose");

const scholarshipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  organisation: {
    type: String,
    required: true,
    trim: true,
  },

  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },

  modeOfApplication: {
    type: String,
    enum: ["Online", "Offline", "Hybrid"],
  },
  country: {
    type: String,

    trim: true,
  },
  totalAmount: {
    type: Number,
  },
  purpose: {
    type: String,

    trim: true,
  },
  fieldOfStudy: {
    type: String,

    trim: true,
  },
  eligibilityCriteria: {
    type: String,

    trim: true,
  },
  grantType: {
    type: String,

    trim: true,
  },
});

const Scholarship = mongoose.model("Scholarship", scholarshipSchema);
module.exports = Scholarship;
