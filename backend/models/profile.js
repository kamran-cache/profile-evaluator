const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  personal_info: { type: mongoose.Schema.Types.ObjectId, ref: "BasicDetails" },
  authorships: [{ type: mongoose.Schema.Types.ObjectId, ref: "Authorship" }],
  awards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Awards" }],
  education: [{ type: mongoose.Schema.Types.ObjectId, ref: "Education" }],
  exhibitions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exhibitions" }],
  experience: [{ type: mongoose.Schema.Types.ObjectId, ref: "Experience" }],
  merits: [{ type: mongoose.Schema.Types.ObjectId, ref: "Merit" }],
  media: [{ type: mongoose.Schema.Types.ObjectId, ref: "MediaMention" }],
  originalWork: [{ type: mongoose.Schema.Types.ObjectId, ref: "OriginalWork" }],
  patents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Patent" }],
  scholarships: [{ type: mongoose.Schema.Types.ObjectId, ref: "Scholarship" }],
  visa: [{ type: mongoose.Schema.Types.ObjectId, ref: "Visa" }],
  pressRelease: [{ type: mongoose.Schema.Types.ObjectId, ref: "PressRelease" }],
  judging: [{ type: mongoose.Schema.Types.ObjectId, ref: "Judging" }],
  membership: [{ type: mongoose.Schema.Types.ObjectId, ref: "Membership" }],
});

// Creating a Mongoose model based on the schema
const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
