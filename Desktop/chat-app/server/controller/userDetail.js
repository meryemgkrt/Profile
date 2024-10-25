const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");

const userDetail = async (req, res) => {
  try {
    const token = req.cookies.token || "";
    // Get user details from token
    const user = await getUserDetailsFromToken(token);
    if (!user) {
      return res.status(401).json({
        message: "Session expired. Please log in again.",
        logout: true,
        success: false,
      });
    }
    return res.status(200).json({
      message: "User details retrieved successfully",
      data: user,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};

module.exports = userDetail;
