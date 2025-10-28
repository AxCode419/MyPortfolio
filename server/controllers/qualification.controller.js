import Qualification from "../models/qualification.model.js";

// ➕ CREATE Qualification
export const createQualification = async (req, res) => {
  try {
    const qualification = new Qualification(req.body);
    await qualification.save();
    res.status(201).json({ message: "Qualification created successfully", qualification });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 📄 READ All Qualifications
export const getAllQualifications = async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.status(200).json(qualifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔍 READ Qualification by ID
export const getQualificationById = async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    if (!qualification) return res.status(404).json({ message: "Qualification not found" });
    res.status(200).json(qualification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✏️ UPDATE Qualification
export const updateQualification = async (req, res) => {
  try {
    const qualification = await Qualification.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!qualification) return res.status(404).json({ message: "Qualification not found" });
    res.status(200).json({ message: "Qualification updated successfully", qualification });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ❌ DELETE Qualification
export const deleteQualification = async (req, res) => {
  try {
    const qualification = await Qualification.findByIdAndDelete(req.params.id);
    if (!qualification) return res.status(404).json({ message: "Qualification not found" });
    res.status(200).json({ message: "Qualification deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🗑️ DELETE All Qualifications
export const deleteAllQualifications = async (req, res) => {
  try {
    await Qualification.deleteMany({});
    res.status(200).json({ message: "All qualifications deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
