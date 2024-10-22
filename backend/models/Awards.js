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
    enum: ["online", "offline", "hybrid"],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
  },
  issuingOrganization: {
    type: String,
  },
  category: {
    type: String,
  },
});

const Awards = mongoose.model("Awards", awardSchema);

module.exports = Awards;
