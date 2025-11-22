import express from "express";
import {
  createQualification,
  getAllQualifications,
  getQualificationById,
  updateQualification,
  deleteQualification,
  deleteAllQualifications,
} from "../controllers/qualification.controller.js";

import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// ⭐ PUBLIC: anyone can READ
router.get("/", getAllQualifications);
router.get("/:id", getQualificationById);

// ⭐ USER: must be logged in to CREATE or UPDATE
router.post("/", authCtrl.requireSignin, createQualification);
router.put("/:id", authCtrl.requireSignin, updateQualification);

// ⭐ ADMIN: only admin can DELETE
router.delete("/:id", authCtrl.requireSignin, authCtrl.isAdmin, deleteQualification);
router.delete("/", authCtrl.requireSignin, authCtrl.isAdmin, deleteAllQualifications);

export default router;
