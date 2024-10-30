const Project = require("../models/Projects");
const Profile = require("../models/profile");
const Experience = require("../models/Experience");

module.exports.addProjects = async (req, res) => {
  try {
    const projects = req.body.data;
    console.log(req.body.data, "body");
    console.log(projects, "proj");
    const profile_id = req.params.id;
    const { experienceId, roleId } = req.params;
    // const roleId = req.params.roleId;
    if (!projects)
      return res.status(404).json({ message: "empty projects cant be added" });

    const experience = await Experience.findById(experienceId);
    if (!experience)
      return res.status(404).json({ message: "Experience not found" });

    // Find the specific role within the experience's roles array
    const role = experience.roles.id(roleId);
    if (!role) return res.status(404).json({ message: "Role not found" });

    // Create a new project and save it

    const project = new Project({ ...projects, role: roleId });
    await project.save();

    // Add the new project ID to the role's projects array and save
    role.projects.push(project._id);

    await experience.save();
    const proj = role.projects;
    res.status(201).json({ message: "Project added successfully", proj });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding project", error });
  }
};

module.exports.getRoleProjects = async (req, res) => {
  try {
    const roleId = req.params.roleId;

    const projects = await Project.find({ role: roleId });
    if (!projects || projects.length === 0)
      return res
        .status(404)
        .json({ message: "Projects for this role not found" });

    console.log(projects);
    res
      .status(200)
      .json({ message: "Projects retrieved successfully", projects });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting projects", error });
  }
};
