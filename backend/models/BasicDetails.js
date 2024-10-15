const mongoose = require("mongoose");

const basicDetailsSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
    },
    mName: {
      type: String,
      required: false,
    },
    lName: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "Other"],
      required: true,
    },
    maritalStatus: {
      type: String,
      enum: ["single", "married", "separated", "divorced", "widowed"],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    usResident: {
      type: String,
      enum: ["yes", "no"],
      required: true,
    },
  },
  { timestamps: true }
);

const BasicDetails = mongoose.model("BasicDetails", basicDetailsSchema);

module.exports = BasicDetails;
