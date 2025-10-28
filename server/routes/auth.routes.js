import express from "express";
import authCtrl from "../controllers/auth.controller.js";
import User from "../models/user.model.js";

const router = express.Router();

/**
 * 🔹 Signup – create a new user account
 *    POST http://localhost:3000/auth/signup
 */
router.route("/auth/signup").post(async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * 🔹 Signin – authenticate user and return JWT token
 *    POST http://localhost:3000/auth/signin
 */
router.route("/auth/signin").post(authCtrl.signin);

/**
 * 🔹 Signout – clear JWT token
 *    GET http://localhost:3000/auth/signout
 */
router.route("/auth/signout").get(authCtrl.signout);

/**
 * 🔹 Example Protected Route (optional for testing)
 *    GET http://localhost:3000/auth/protected
 */
router.route("/auth/protected").get(authCtrl.requireSignin, (req, res) => {
  res.json({ message: "Access granted to protected route ✅" });
});

export default router;
