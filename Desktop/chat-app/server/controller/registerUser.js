const UserModel = require("../models/UserModels");
const bcryptjs = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, profilePicture } = req.body;

    // Check if email already exists
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        error: true,
      });
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const payload = {
      name,
      email,
      profilePicture,
      password: hashedPassword,
    };

    // Create new user
    const user = new UserModel(payload);
    const savedUser = await user.save();

    return res.status(201).json({
      message: "User created successfully",
      data: savedUser,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};

module.exports = registerUser;