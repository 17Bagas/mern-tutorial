const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  setuserGoal
} = require("../controllers/userController.js");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.route ('/').post(protect, setuserGoal)

module.exports = router
