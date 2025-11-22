import express from "express";
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
  deleteAllContacts,
} from "../controllers/contact.controller.js";

import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// ⭐ PUBLIC: view contacts
router.get("/", getAllContacts);
router.get("/:id", getContactById);

// ⭐ USER must be logged in to CREATE or UPDATE
router.post("/", authCtrl.requireSignin, createContact);
router.put("/:id", authCtrl.requireSignin, updateContact);

// ⭐ ONLY ADMIN can delete
router.delete("/:id", authCtrl.requireSignin, authCtrl.isAdmin, deleteContact);
router.delete("/", authCtrl.requireSignin, authCtrl.isAdmin, deleteAllContacts);

export default router;
