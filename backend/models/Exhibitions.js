const mongoose = require("mongoose");

const exhibitionSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["Speaker", "Presenter", "Panelist", "Moderator"],
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  main: [
    {
      title: String,
      organization: String,
      link: String,
      criteria: String,
      description: String,
      evidenceType: String,
      evidence: String,
    },
  ],
});

const Exhibition = mongoose.model("Exhibitions", exhibitionSchema);
module.exports = Exhibition;
