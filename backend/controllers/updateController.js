const Authorship = require("../models/Authorship");
const Experience = require("../models/Experience");
const Awards = require("../models/Awards");
const Education = require("../models/Education");
const Exhibition = require("../models/Exhibitions");
const FinalMerits = require("../models/FinalMerits");
const MediaMentions = require("../models/MediaMentions");
const OriginalWork = require("../models/OrignalWork");
const Patent = require("../models/Patents");
const Scholarship = require("../models/Scholarships");
const Visa = require("../models/Visa");
const Profile = require("../models/profile");
const PressRelease = require("../models/PressRelease");
const Judging = require("../models/Judging");

// update visa
exports.updateVisa = async (req, res) => {
  try {
    const { forms } = req.body.data; // Extract new visa forms from the payload

    // Find the profile whose visas need to be replaced
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    // Remove existing visas associated with the profile
    await Visa.deleteMany({ _id: { $in: profile.visa } });

    // Clear the visa array in the profile
    profile.visa = [];

    // Save the new visa entries
    const savedVisas = [];
    for (const form of forms) {
      const { visaType, startDate, endDate, course, institution, company } =
        form;

      // Create a new Visa instance for each form
      const newVisa = new Visa({
        visaType,
        startDate: new Date(startDate), // Convert string to Date object
        endDate: new Date(endDate), // Convert string to Date object
        course,
        institution,
        company,
      });

      // Save the new visa to the database
      await newVisa.save();

      // Add the new visa's ID to the profile
      savedVisas.push(newVisa._id);
      profile.visa.push(newVisa._id);
    }

    // Save the updated profile with the new visa references
    await profile.save();

    // Send the response with the updated visa IDs
    res
      .status(200)
      .json({ message: "Visa data replaced successfully", visas: savedVisas });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update experiences
exports.updateExperience = async (req, res) => {
  try {
    const { experiences } = req.body.data; // Extract new visa forms from the payload

    // Find the profile whose visas need to be replaced
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    // Remove existing visas associated with the profile
    await Experience.deleteMany({ _id: { $in: profile.experience } });

    // Clear the visa array in the profile
    profile.experience = [];

    // Save the new visa entries
    const savedExperience = [];
    for (const experience of experiences) {
      // Create a new Visa instance for each form
      const newExperience = new Experience(experience);
      await newExperience.save();

      // Add the new visa's ID to the profile
      savedExperience.push(newExperience._id);
      profile.experience.push(newExperience._id);
    }

    // Save the updated profile with the new visa references
    await profile.save();

    // Send the response with the updated visa IDs
    res.status(200).json({
      message: "Visa data replaced successfully",
      experiences: savedExperience,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.addMainToMerit = async (req, res) => {
  try {
    const meritId = req.params.meritId;
    const newMainEntry = req.body;
    console.log(newMainEntry, "new");
    console.log(req.body.data, "req");

    const updatedMerit = await FinalMerits.findByIdAndUpdate(
      meritId,
      { $push: { main: newMainEntry.merit } },
      { new: true, runValidators: true }
    );

    if (!updatedMerit) {
      return res.status(404).json({ message: "Merit not found" });
    }

    res.status(200).json({
      message: "New main entry added successfully",
      updatedMerit,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error adding main entry to Merit", error });
  }
};

module.exports.updateAuthorship = async (req, res) => {
  try {
    const authorshipId = req.params.authorshipId;
    const updatedData = req.body.data;

    const updatedAuthorship = await Authorship.findByIdAndUpdate(
      authorshipId,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedAuthorship)
      return res.status(404).json({ message: "Authorship not found" });
    res.status(200).json({
      message: "Authorship updated successfully",
      updatedAuthorship,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error adding main entry to Merit", error });
  }
};

module.exports.updatePressRelease = async (req, res) => {
  try {
    const pressId = req.params.pressId;
    const updatedData = req.body.data;

    const updatedPR = await PressRelease.findByIdAndUpdate(
      pressId,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedPR)
      return res.status(404).json({ message: "Authorship not found" });
    res.status(200).json({
      message: "Press Release updated successfully",
      updatedPR,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error adding main entry to Merit", error });
  }
};

module.exports.updateExhibition = async (req, res) => {
  try {
    const exhibitionId = req.params.exhibitionId;
    const updatedData = req.body.data;

    const updatedExhibition = await Exhibition.findByIdAndUpdate(
      exhibitionId,
      { $push: { main: updatedData } },
      { new: true, runValidators: true }
    );

    if (!updatedExhibition)
      return res.status(404).json({ message: "Exhibition not found" });
    res.status(200).json({
      message: "Exhibition updated successfully",
      updatedExhibition,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error adding main entry to Merit", error });
  }
};

module.exports.updateJudging = async (req, res) => {
  try {
    const judgingId = req.params.judgingId;
    const updatedData = req.body.data;

    const updatedJudging = await Judging.findByIdAndUpdate(
      judgingId,
      { $push: { main: updatedData } },
      { new: true, runValidators: true }
    );

    if (!updatedJudging)
      return res.status(404).json({ message: "Exhibition not found" });
    res.status(200).json({
      message: "Judging updated successfully",
      updatedJudging,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error adding main entry to Merit", error });
  }
};
