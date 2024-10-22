const mongoose = require("mongoose");

const visaSchema = new mongoose.Schema(
  {
    visaType: {
      type: String,
      // enum: ['F-1', 'H-1B', 'Other'],
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
    course: {
      type: String,
      trim: true,
    },
    institution: {
      type: String,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Visa = mongoose.model("Visa", visaSchema);
module.exports = Visa;
