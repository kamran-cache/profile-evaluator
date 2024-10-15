const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  issuingOrganization: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    }
  },
  modeOfApplication: {
    type: String,
    enum: ['Online', 'Offline', 'Hybrid'],
    required: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  purpose: {
    type: String,
    required: true,
    trim: true
  },
  fieldOfStudy: {
    type: String,
    required: true,
    trim: true
  },
  eligibilityCriteria: {
    type: String,
    required: true,
    trim: true
  },
  grantType: {
    type: String,
    required: true,
    trim: true
  }
});

const Scholarship = mongoose.model('Scholarship', scholarshipSchema);
module.exports = Scholarship;
