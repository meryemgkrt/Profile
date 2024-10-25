const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");
const UserModel = require("../models/UserModels");

const updateUserDetails = async (req, res) => {
  try {
    // Token'ı cookie veya Authorization başlığından alın
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1] || "";
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided", success: false });
    }

    // Token'dan kullanıcı bilgilerini alın
    const user = await getUserDetailsFromToken(token);
    if (!user || !user._id) {
      return res.status(401).json({ message: "Unauthorized: Invalid token", success: false });
    }
    
    const { name, profilePicture } = req.body;
    const updateResult = await UserModel.updateOne({ _id: user._id }, { name, profilePicture });
    
    if (updateResult.nModified === 0) {
      return res.status(404).json({ message: "User not found or no changes applied", success: false });
    }
    
    const userInformation = await UserModel.findById(user._id);
    if (!userInformation) {
      return res.status(404).json({ message: "User not found", success: false, data: userInformation });
    }

    return res.status(200).json({
      message: "User details updated successfully",
      data: userInformation,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Internal server error",
      error: true,
    });
  }
};

module.exports = updateUserDetails;
