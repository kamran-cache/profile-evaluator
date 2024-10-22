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
});

const Exhibition = mongoose.model("Exhibitions", exhibitionSchema);
module.exports = Exhibition;
