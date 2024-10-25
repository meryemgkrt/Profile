const express = require("express");
const cors = require("cors");
const registerUser = require("../controller/registerUser");
const checkEmail = require("../controller/checkEmail");
const userDetail = require("../controller/userDetail");
const checkPassword = require("../controller/checkPassword");
const logout = require("../controller/logout");
const updateUserDetails = require("../controller/updateUserDetails");

const router = express.Router();

// Create a new user
router.post("/register", registerUser);

// Check email
router.post("/email", checkEmail);

// Check password
router.post("/password", checkPassword);

// Get user details
router.get("/user-detail", userDetail);

// Logout user
router.get("/logout", logout)

//Update user
router.post("/update-user", updateUserDetails)

module.exports = router;
