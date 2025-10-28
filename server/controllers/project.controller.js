import Project from "../models/project.model.js";

// ➕ CREATE Project
export const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({ message: "Project created successfully", project });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 📄 READ All Projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔍 READ Project by ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✏️ UPDATE Project
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json({ message: "Project updated successfully", project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ❌ DELETE Project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🗑️ DELETE All Projects
export const deleteAllProjects = async (req, res) => {
  try {
    await Project.deleteMany({});
    res.status(200).json({ message: "All projects deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
