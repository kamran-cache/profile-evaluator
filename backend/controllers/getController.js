const Experience = require("../models/Experience");

exports.getAwards = async (req, res) => {
  try {
    // Find the experience by ID and populate the awards field
    const experience = await Experience.findById(
      req.params.experienceId
    ).populate("awards");

    if (!experience) {
      return res.status(404).json({ error: "Experience not found" });
    }
    console.log(experience.awards, "awardss");

    // Respond with the populated awards
    res.status(200).json({ awards: experience.awards });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
