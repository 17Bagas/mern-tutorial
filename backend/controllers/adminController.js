const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");

// @desc    Login admin
// @route   POST /api/admin
// @access  Public
const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    //Generate akun admin
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("admin", salt);
    const akunadmin = await Admin.updateMany({
        name: "admin",
        email: "admin@admin.com",
        password: hashedPassword,
      });

    //check for admin
    const admin = await Admin.findOne({ email });
  
    if (admin && (await bcrypt.compare(password, admin.password))) {
      res.json({
        _id: admin.id,
        name: admin.name,
        email: admin.email,
        token: generateToken(admin._id),
      });
    } else {
      res.status(400);
      throw Error("Invalid credentials");
    }
  });

    //generate JWT
    const generateToken = (id) => {
        return jwt.sign({ id }, process.env.JWT_ADMIN, {
        expiresIn: "30d",
        });
    };

  module.exports = {
    loginAdmin,
  };