const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema(
  {
    name: [String],
  },
  { timestamps: true }
);

const Membership = mongoose.model("Membership", membershipSchema);

module.exports = Membership;
