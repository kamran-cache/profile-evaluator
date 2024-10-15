const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  completionDate: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    default: "",
  },
});

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;
