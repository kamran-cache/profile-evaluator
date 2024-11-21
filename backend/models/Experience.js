const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  roles: [
    {
      jobTitle: {
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
      status: {
        type: String,
        default: "todo",
        enum: ["todo", "inprogress", "review", "completed"],
      },
      projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
    },
  ],
  awards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Awards" }],

  location: {
    type: String,
    required: true,
  },
});

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;
