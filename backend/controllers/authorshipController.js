const Authorship = require("../models/Authorship");
const Profile = require("../models/profile");

// Add new Authorship to a profile
exports.addAuthorship = async (req, res) => {
  try {
    const Authorship = new Authorship(req.body); // Create new Authorship object

    // Find the profile and add the new Authorship reference
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    await Authorship.save();
    profile.authorships.push(Authorship._id);
    await profile.save();
    console.log(profile, "profile");
    res
      .status(201)
      .json({ message: "Authorship added successfully", Authorship });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all Authorships for a profile
exports.getAuthorships = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.profileId).populate(
      "authorships"
    );
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    res.status(200).json(profile.authorships); // Send all Authorships related to the profile
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a specific Authorship
exports.updateAuthorship = async (req, res) => {
  try {
    const updatedAuthorship = await Authorship.findByIdAndUpdate(
      req.params.AuthorshipId,
      req.body,
      { new: true }
    );
    if (!updatedAuthorship)
      return res.status(404).json({ error: "Authorship not found" });

    res.status(200).json(updatedAuthorship);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an Authorship
exports.deleteAuthorship = async (req, res) => {
  try {
    const Authorship = await Authorship.findByIdAndDelete(
      req.params.AuthorshipId
    );
    if (!Authorship)
      return res.status(404).json({ error: "Authorship not found" });

    // Find the profile and remove the reference to the deleted Authorship
    await Profile.findByIdAndUpdate(req.params.profileId, {
      $pull: { Authorship: req.params.AuthorshipId },
    });

    res.status(200).json({ message: "Authorship deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
