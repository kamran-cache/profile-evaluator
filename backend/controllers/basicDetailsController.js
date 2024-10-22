const BasicDetails = require("../models/BasicDetails");
const Profile = require("../models/profile");
const Users = require("../models/Users");

// Create a profile and associate it with BasicDetails
exports.createBasicDetails = async (req, res) => {
  try {
    const userId = req.user.userId;
    // console.log(userId);
    const basicDetails = new BasicDetails(req.body.data);
    await basicDetails.save();

    const profile = new Profile({
      personal_info: basicDetails._id, // Set the reference to the BasicDetails object
    });
    await profile.save();
    const users = await Users.findByIdAndUpdate(
      userId,
      { profile: profile._id },
      { new: true }
    );

    console.log("Users", users);
    console.log("basicDetails", basicDetails);

    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get basic details by ID
exports.getBasicDetails = async (req, res) => {
  try {
    const basicDetails = await BasicDetails.findById(req.params.id);
    if (!basicDetails)
      return res.status(404).json({ error: "Basic details not found" });

    res.status(200).json(basicDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Basic Details linked to a Profile
exports.updateBasicDetailsInProfile = async (req, res) => {
  const basicDetails = req.body.data;
  const profileId = req.params.id;

  try {
    // Fetch the Profile by ID
    const profile = await Profile.findById(profileId);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    // Find the BasicDetails using personal_info ID from Profile
    const basicDetailsId = profile.personal_info; // Extract the personal_info ID

    // Update the BasicDetails document
    const updatedBasicDetails = await BasicDetails.findByIdAndUpdate(
      basicDetailsId,
      basicDetails,
      { new: true } // Return the updated document
    );
    if (!updatedBasicDetails)
      return res.status(404).json({ error: "Basic details not found" });

    // Optionally fetch the updated Profile with the updated BasicDetails if you need to return it
    const updatedProfile = await Profile.findById(profileId).populate(
      "personal_info"
    );

    res.status(200).json(updatedProfile); // Return the updated Profile
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete basic details by ID
exports.deleteBasicDetails = async (req, res) => {
  try {
    const basicDetails = await BasicDetails.findByIdAndDelete(req.params.id);
    if (!basicDetails)
      return res.status(404).json({ error: "Basic details not found" });

    res.status(200).json({ message: "Basic details deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
