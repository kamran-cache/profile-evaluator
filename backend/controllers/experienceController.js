const Experience = require("../models/Experience");
const Profile = require("../models/profile");

// Add new experience to a profile
exports.addExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body); // Create new experience object

    // Find the profile and add the new experience reference
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    await experience.save();
    profile.experience.push(experience._id);
    await profile.save();

    res
      .status(201)
      .json({ message: "Experience added successfully", experience });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all experiences for a profile
exports.getExperiences = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.profileId).populate(
      "experience"
    );
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    res.status(200).json(profile.experience); // Send all experiences related to the profile
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a specific experience
exports.updateExperience = async (req, res) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.experienceId,
      req.body,
      { new: true }
    );
    if (!updatedExperience)
      return res.status(404).json({ error: "Experience not found" });

    res.status(200).json(updatedExperience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an experience
exports.deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(
      req.params.experienceId
    );
    if (!experience)
      return res.status(404).json({ error: "Experience not found" });

    // Find the profile and remove the reference to the deleted experience
    await Profile.findByIdAndUpdate(req.params.profileId, {
      $pull: { experience: req.params.experienceId },
    });

    res.status(200).json({ message: "Experience deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
