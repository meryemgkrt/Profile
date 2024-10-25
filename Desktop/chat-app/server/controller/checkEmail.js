const UserModel = require("../models/UserModels");

// Function to check if an email exists in the database
const checkEmail = async (req, res) => {
  try {
    const { email } = req.body;

    // Find user by email and exclude the password field
    const user = await UserModel.findOne({ email }).select("-password");

    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
        error: true,
      });
    }

    return res.status(200).json({
      message: "Email verified",
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};

module.exports = checkEmail;