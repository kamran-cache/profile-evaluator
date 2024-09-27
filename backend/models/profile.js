const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  university_name: { type: String, required: true },
  graduation_date: { type: Date, required: true },
  degree: { type: String, required: true },
  department: { type: String, required: true },
});

const workExperienceSchema = new mongoose.Schema({
  company_name: { type: String, required: true },
  role: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date },
  description: { type: String },
});

const personalInfoSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: String },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    postal_code: { type: String },
    country: { type: String },
  },
});

const profileSchema = new mongoose.Schema({
  personal_info: { type: personalInfoSchema, required: true },
  education: [educationSchema],
  work_experience: [workExperienceSchema],
  skills: { type: [String] },
  projects: [
    {
      title: { type: String, required: true },
      description: { type: String },
      year: { type: Number },
      role: { type: String },
    },
  ],
  extra_curriculars: { type: [String] }, // Array of strings for extra-curricular activities
});

// Creating a Mongoose model based on the schema
const Profile = mongoose.model("Profile", profileSchema);

module.exports = User;
