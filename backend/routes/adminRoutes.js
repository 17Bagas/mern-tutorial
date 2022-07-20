const express = require("express");
const router = express.Router();
const {
  loginAdmin,
 // akunAdmin
} = require("../controllers/adminController.js");
const { protectAdmin } = require("../middleware/adminMiddleware");

router.post("/", loginAdmin);
//router.post("/admin",protectAdmin, akunAdmin);

module.exports = router
