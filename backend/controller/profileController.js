const Profile = require("../models/profile");

// Create a new profile
module.exports.createProfile = async (req, res) => {
  const data = req.body;
  try {
    const newProfile = new Profile(data);
    await newProfile.save();
    res
      .status(201)
      .json({ message: "Profile created successfully", profile: newProfile });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating profile", error: error.message });
  }
};

// Get a specific profile by ID
module.exports.getProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findById(id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving profile", error: error.message });
  }
};

// Update a specific profile by ID
module.exports.updateProfile = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedProfile = await Profile.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    if (!updatedProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res
      .status(200)
      .json({
        message: "Profile updated successfully",
        profile: updatedProfile,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating profile", error: error.message });
  }
};

// Delete a specific profile by ID
module.exports.deleteProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProfile = await Profile.findByIdAndDelete(id);
    if (!deletedProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting profile", error: error.message });
  }
};
