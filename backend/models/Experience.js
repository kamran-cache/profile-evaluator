const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  experiences: [
    {
      role: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
    },
  ],
});

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;
