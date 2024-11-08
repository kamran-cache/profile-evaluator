const mongoose = require("mongoose");

const judgingSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    main: [
      {
        organizationName: String,
        startDate: Date,
        endDate: Date,
        link: String,
        criteria: String,
        evidenceType: String,
        evidence: String,
      },
    ],
  },
  { timestamps: true }
);

const Judging = mongoose.model("Judging", judgingSchema);

module.exports = Judging;
