import express from "express";
import authCtrl from "../controllers/auth.controller.js";
import User from "../models/user.model.js";

const router = express.Router();

/**
 * 🔹 Signup – Create a new user account
 *    POST /auth/signup
 */
router.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * 🔹 Signin – Authenticate user & return JWT
 *    POST /auth/signin
 */
router.post("/signin", authCtrl.signin);

/**
 * 🔹 Signout – Clear JWT cookie/token
 *    GET /auth/signout
 */
router.get("/signout", authCtrl.signout);

/**
 * 🔹 Example Protected Route (for testing)
 *    GET /auth/protected
 */
router.get("/protected", authCtrl.requireSignin, (req, res) => {
  res.json({ message: "Access granted to protected route ✅" });
});

export default router;
