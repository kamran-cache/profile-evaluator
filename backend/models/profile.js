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
  personal_info: { type: mongoose.Schema.Types.ObjectId, ref: "BasicDetails" },
  authorships: [{ type: mongoose.Schema.Types.ObjectId, ref: "Authorship" }],
  awards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Awards" }],
  education: [{ type: mongoose.Schema.Types.ObjectId, ref: "Education" }],
  exhibitions: { type: mongoose.Schema.Types.ObjectId, ref: "Exhibitions" },
  experience: [{ type: mongoose.Schema.Types.ObjectId, ref: "Experience" }],
  merits: [{ type: mongoose.Schema.Types.ObjectId, ref: "Merit" }],
  media: [{ type: mongoose.Schema.Types.ObjectId, ref: "MediaMention" }],
  original_work: [
    { type: mongoose.Schema.Types.ObjectId, ref: "OriginalWork" },
  ],
  patents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pateent" }],
  scholarships: [{ type: mongoose.Schema.Types.ObjectId, ref: "Scholarship" }],
  visa: [{ type: mongoose.Schema.Types.ObjectId, ref: "Visa" }],
});

// Creating a Mongoose model based on the schema
const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
