const mongoose = require("mongoose");

const exhibitionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  hasExhibition: {
    type: Boolean,
    required: true,
  },
  roles: [
    {
      role: {
        type: String,
        enum: ["Speaker", "Presenter", "Panelist", "Moderator"],
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Exhibition = mongoose.model("Exhibition", exhibitionSchema);
module.exports = Exhibition;
