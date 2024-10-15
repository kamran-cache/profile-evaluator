const mongoose = require('mongoose');

const patentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  patentNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  filingDate: {
    type: Date,
    required: true
  },
  grantDate: {
    type: Date
  },
  currentStatus: {
    type: String,
    enum: ['Issued', 'Pending', 'Abandoned'],
    required: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  patentType: {
    type: String,
    enum: ['Utility', 'Design', 'Plant'],
    required: true
  },
  affiliatedInstitution: {
    type: String,
    trim: true
  },
  citations: [
    {
      journalName: {
        type: String,
        required: true,
        trim: true
      },
      volume: {
        type: String,
        trim: true
      },
      issue: {
        type: String,
        trim: true
      },
      pages: {
        type: String,
        trim: true
      },
      year: {
        type: Number,
        required: true
      }
    }
  ],
  internationalCitations: [
    {
      journalName: {
        type: String,
        required: true,
        trim: true
      },
      volume: {
        type: String,
        trim: true
      },
      issue: {
        type: String,
        trim: true
      },
      pages: {
        type: String,
        trim: true
      },
      year: {
        type: Number,
        required: true
      }
    }
  ]
}, { timestamps: true });

const Patent = mongoose.model('Patent', patentSchema);

module.exports = Patent;
