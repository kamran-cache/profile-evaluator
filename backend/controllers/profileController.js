const Profile = require("../models/profile");

// Get a specific profile by ID
exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id)
      .populate("personal_info")
      .populate("authorships")
      .populate("awards")
      .populate("education")
      .populate("exhibitions")
      .populate("experience")
      .populate("merits")
      .populate("media")
      .populate("originalWork")
      .populate("patents")
      .populate("scholarships")
      .populate("visa")
      .populate("pressRelease")
      .populate("judging")
      .populate("membership");

    if (!profile) return res.status(404).json({ error: "Profile not found" });

    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
