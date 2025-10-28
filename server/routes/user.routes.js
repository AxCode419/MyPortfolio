import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// ✅ Create user (Signup) and List all users
router
  .route("/api/users")
  .post(userCtrl.create)       // Public - signup
  .get(userCtrl.list);         // Public - view all users

// ✅ Single user routes (protected)
router
  .route("/api/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)                     // Protected - view specific user
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update) // Protected - update
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove); // Protected - delete

// ✅ Bind :userId param
router.param("userId", userCtrl.userByID);

export default router;
