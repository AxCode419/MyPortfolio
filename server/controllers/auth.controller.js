import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import config from "../../config/config.js";

/**
 * 🔹 SIGNUP
 */
const signup = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    return res.status(200).json({
      message: "Signup successful!",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

/**
 * 🔹 SIGNIN
 * Generates a JWT containing BOTH _id and role
 */
const signin = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(401).json({ error: "User not found" });

    if (!user.authenticate(req.body.password)) {
      return res.status(401).json({
        error: "Email and password don't match.",
      });
    }

    // ⭐ IMPORTANT: JWT must include role for Assignment 3
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      config.jwtSecret
    );

    res.cookie("t", token, { expire: new Date() + 9999 });

    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    return res.status(401).json({ error: "Could not sign in" });
  }
};

/**
 * 🔹 SIGNOUT
 */
const signout = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({ message: "Signed out" });
};

/**
 * 🔹 REQUIRE JWT
 */
const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  userProperty: "auth",
});

/**
 * 🔹 AUTHORIZATION – verifies user is accessing their own data
 */
const hasAuthorization = (req, res, next) => {
  const authorized =
    req.profile && req.auth && req.profile._id == req.auth._id;

  if (!authorized)
    return res.status(403).json({ error: "User is not authorized" });

  next();
};

/**
 * 🔹 ADMIN CHECK — Assignment 3 Requirement
 */
const isAdmin = (req, res, next) => {
  if (req.auth.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }
  next();
};

export default {
  signup,
  signin,
  signout,
  requireSignin,
  hasAuthorization,
  isAdmin,
};
