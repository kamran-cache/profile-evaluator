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
const Membership = require("../models/Membership");

// Add new Authorship to a profile
exports.addAuthorship = async (req, res) => {
  try {
    const { authorships } = req.body.data; // Create new experience object
    console.log(authorships, "awards");
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    const savedAuthorships = [];
    for (const authorship of authorships) {
      const newAuthorship = new Authorship(authorship);
      await newAuthorship.save();
      savedAuthorships.push(newAuthorship._id);

      profile.authorships.push(newAuthorship._id);
    }
    await profile.save();

    // Populate the visa array in the profile and return it
    const populatedProfile = await profile.populate("authorships");

    res.status(201).json({
      message: "Authorship added successfully",
      authorships: populatedProfile.authorships,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new awards to a profile
exports.addAwards = async (req, res) => {
  try {
    const { awards } = req.body.data; // Create new experience object
    console.log(awards, "awards");
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    const savedAwards = [];

    const awardsArray = Array.isArray(awards) ? awards : [awards];

    for (const award of awardsArray) {
      const newAward = new Awards(award);
      await newAward.save();
      savedAwards.push(newAward._id);

      profile.awards.push(newAward._id);
    }
    await profile.save();

    // Populate the visa array in the profile and return it
    const populatedProfile = await profile.populate("awards");

    res.status(201).json({
      message: "Experience added successfully",
      awards: populatedProfile.awards,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// main add awrds
exports.AddAward = async (req, res) => {
  try {
    const { profileId, experienceId } = req.params;
    const {
      awardName,
      issuingOrganization,
      date,
      scope,
      criteria,
      nicheImpact,
      evidenceType,
      evidence,
    } = req.body.data;
    console.log(req.body.data, profileId, experienceId, "awardsData");

    // Create the award
    const awardData = {
      awardName,
      issuingOrganization,
      date,
      scope,
      criteria,
      nicheImpact,
      evidenceType,
      evidence,
      profile: profileId,
    };
    if (experienceId && experienceId !== "undefined") {
      awardData.experience = experienceId;
    }

    const newAward = new Awards(awardData);
    const savedAward = await newAward.save();

    // Update the profile with the new award reference
    if (profileId) {
      await Profile.findByIdAndUpdate(profileId, {
        $push: { awards: savedAward._id },
      });
    }

    // Update the experience with the new award reference
    if (experienceId && experienceId !== "undefined") {
      await Experience.findByIdAndUpdate(experienceId, {
        $push: { awards: savedAward._id },
      });
    }

    res.status(201).json({
      message: "Award added successfully!",
      award: savedAward,
    });
  } catch (error) {
    console.error("Error adding award:", error);
    res.status(500).json({
      message: "An error occurred while adding the award.",
      error: error.message,
    });
  }
};

// Add new Exhibition to a profile
exports.addExhibition = async (req, res) => {
  try {
    const { forms } = req.body.data; // Extract forms array from the payload
    console.log(forms, "data");
    // Iterate over forms array and process each visa
    // Find the profile and add the visa reference
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    const savedExhibition = [];
    for (const form of forms) {
      // Convert date strings to Date objects

      const exhibition = new Exhibition(form);

      await exhibition.save();
      savedExhibition.push(exhibition._id); // Keep track of saved visa IDs

      profile.exhibitions.push(exhibition._id);
    }
    await profile.save();

    // Populate the visa array in the profile and return it
    const populatedProfile = await profile.populate("exhibitions");

    res.status(201).json({
      message: "Visas added successfully",
      exhibition: populatedProfile.exhibitions,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new education to a profile
exports.addEducation = async (req, res) => {
  try {
    const { educations } = req.body.data; // Create new experience object
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    const savedEducations = [];

    const educationsArray = Array.isArray(educations)
      ? educations
      : [educations];

    for (const education of educationsArray) {
      const newEducation = new Education(education);
      await newEducation.save();
      savedEducations.push(newEducation._id);

      profile.education.push(newEducation._id);
    }
    await profile.save();

    // Populate the visa array in the profile and return it
    const populatedProfile = await profile.populate("education");

    res.status(201).json({
      message: "Experience added successfully",
      education: populatedProfile.education,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new experience to a profile
exports.addExperience = async (req, res) => {
  try {
    const { experiences } = req.body.data;
    console.log("Received experiences:", experiences);

    // Find the profile by ID
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    // Process each experience (single or multiple) and add to profile
    const experienceArray = Array.isArray(experiences)
      ? experiences
      : [experiences];
    for (const experience of experienceArray) {
      const newExperience = new Experience({
        company: experience.company,
        roles: experience.roles,
        location: experience.location,
      });

      await newExperience.save();
      console.log("Saved experience:", newExperience);

      profile.experience.push(newExperience._id);
    }

    // Save the updated profile and populate experiences
    await profile.save();
    const populatedProfile = await profile.populate("experience");

    res.status(201).json({
      message: "Experience added successfully",
      experiences: populatedProfile.experience,
    });
  } catch (err) {
    console.error("Error adding experience:", err);
    res.status(500).json({ error: err.message });
  }
};

// Add new merits to a profile
exports.addFinalMerits = async (req, res) => {
  try {
    const { forms } = req.body.data; // Create new experience object
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    const savedExperiences = [];
    for (const form of forms) {
      const newMerit = new FinalMerits(form);
      await newMerit.save();
      savedExperiences.push(newMerit._id);

      profile.merits.push(newMerit._id);
    }
    await profile.save();

    // Populate the visa array in the profile and return it
    const populatedProfile = await profile.populate("merits");

    res.status(201).json({
      message: "Experience added successfully",
      merits: populatedProfile.merits,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new mediaMentions to a profile
exports.addMedia = async (req, res) => {
  try {
    const mediaMentions = new MediaMentions(req.body); // Create new experience object

    // Find the profile and add the new experience reference
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    await mediaMentions.save();
    profile.mediaMentions.push(mediaMentions._id);
    await profile.save();

    console.log(profile, "profile");
    res
      .status(201)
      .json({ message: "mediaMentions added successfully", mediaMentions });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new originalWork to a profile
exports.addOriginalWork = async (req, res) => {
  try {
    const originalWork = new OriginalWork(req.body); // Create new experience object

    // Find the profile and add the new experience reference
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    await originalWork.save();
    profile.originalWork.push(originalWork._id);
    await profile.save();

    console.log(profile, "profile");
    res
      .status(201)
      .json({ message: "originalWork added successfully", originalWork });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new patents to a profile
exports.addPatent = async (req, res) => {
  try {
    const patent = new Patent(req.body); // Create new experience object

    // Find the profile and add the new experience reference
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    await patent.save();
    profile.patent.push(patent._id);
    await profile.save();

    console.log(profile, "profile");
    res
      .status(201)
      .json({ message: "originalWork added successfully", patent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new scholarships to a profile
exports.addScholarship = async (req, res) => {
  try {
    const { scholarships } = req.body.data; // Create new experience object
    console.log("scholarships", scholarships);
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    const savedScholarships = [];
    for (const scholarship of scholarships) {
      const newScholarship = new Scholarship(scholarship);
      await newScholarship.save();
      savedScholarships.push(newScholarship._id);

      profile.scholarships.push(newScholarship._id);
    }
    await profile.save();

    // Populate the visa array in the profile and return it
    const populatedProfile = await profile.populate("scholarships");

    res.status(201).json({
      message: "Experience added successfully",
      scholarships: populatedProfile.scholarships,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new Visa to a profile
exports.addVisa = async (req, res) => {
  try {
    const { forms } = req.body.data; // Extract forms array from the payload
    console.log(forms, "data");
    // Iterate over forms array and process each visa
    // Find the profile and add the visa reference
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    const savedVisas = [];
    for (const form of forms) {
      // Convert date strings to Date objects
      const { visaType, startDate, endDate, course, institution, company } =
        form;
      const visa = new Visa({
        visaType,
        startDate: new Date(startDate), // Convert string to Date object
        endDate: new Date(endDate), // Convert string to Date object
        course,
        institution,
        company,
      });

      await visa.save();
      savedVisas.push(visa._id); // Keep track of saved visa IDs

      profile.visa.push(visa._id);
    }
    await profile.save();

    // Populate the visa array in the profile and return it
    const populatedProfile = await profile.populate("visa");

    res.status(201).json({
      message: "Visas added successfully",
      visas: populatedProfile.visa,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new Press Release to a profile
exports.addPR = async (req, res) => {
  try {
    const { pressReleases } = req.body.data; // Extract forms array from the payload
    console.log(pressReleases, "data");
    // Iterate over forms array and process each visa
    // Find the profile and add the visa reference
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    const savedData = [];

    const pressReleasesArray = Array.isArray(pressReleases)
      ? pressReleases
      : [pressReleases];
    for (const pressRelease of pressReleasesArray) {
      // Convert date strings to Date objects

      const newPressRelease = new PressRelease(pressRelease);

      await newPressRelease.save();
      savedData.push(newPressRelease._id); // Keep track of saved visa IDs

      profile.pressRelease.push(newPressRelease._id);
    }
    await profile.save();

    // Populate the visa array in the profile and return it
    const populatedProfile = await profile.populate("pressRelease");

    res.status(201).json({
      message: "Visas added successfully",
      pressRelease: populatedProfile.pressRelease,
    });
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ error: err.message });
  }
};

// Add new Judging to a profile
exports.addJudging = async (req, res) => {
  try {
    const { judgingRecords } = req.body.data; // Extract forms array from the payload
    console.log(judgingRecords, "data");
    // Iterate over forms array and process each visa
    // Find the profile and add the visa reference
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    const judgingArray = Array.isArray(judgingRecords)
      ? judgingRecords
      : [judgingRecords];

    const savedData = [];
    for (const judgingRecord of judgingArray) {
      // Convert date strings to Date objects

      const newjudgingRecords = new Judging(judgingRecord);

      await newjudgingRecords.save();
      savedData.push(newjudgingRecords._id); // Keep track of saved visa IDs

      profile.judging.push(newjudgingRecords._id);
    }
    await profile.save();

    // Populate the visa array in the profile and return it
    const populatedProfile = await profile.populate("judging");

    res.status(201).json({
      message: "Visas added successfully",
      judging: populatedProfile.judging,
    });
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ error: err.message });
  }
};

// Add new Memebership to a profile
exports.addMembership = async (req, res) => {
  try {
    const { forms } = req.body.data; // Extract forms array from the payload
    console.log(forms, "data");

    // Find the profile and ensure it exists
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    const savedData = [];

    for (const form of forms) {
      const { name } = form;

      // Create a new membership using an object
      const newMembership = new Membership({ name }); // Corrected

      await newMembership.save();
      savedData.push(newMembership._id); // Track saved membership IDs

      // Add the membership ID to the profile
      profile.membership.push(newMembership._id);
    }

    await profile.save();

    // Populate the membership array in the profile and return it
    const populatedProfile = await profile.populate("membership");

    res.status(201).json({
      message: "Memberships added successfully",
      membership: populatedProfile.membership,
    });
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ error: err.message });
  }
};
