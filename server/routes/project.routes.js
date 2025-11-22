import express from "express";
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  deleteAllProjects,
} from "../controllers/project.controller.js";

import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// ⭐ PUBLIC
router.get("/", getAllProjects);
router.get("/:id", getProjectById);

// ⭐ USER must be logged in (NOT admin)
router.post("/", authCtrl.requireSignin, createProject);
router.put("/:id", authCtrl.requireSignin, updateProject);

// ⭐ ONLY ADMIN can delete
router.delete("/:id", authCtrl.requireSignin, authCtrl.isAdmin, deleteProject);
router.delete("/", authCtrl.requireSignin, authCtrl.isAdmin, deleteAllProjects);

export default router;
