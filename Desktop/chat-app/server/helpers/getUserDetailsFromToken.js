const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModels');

const getUserDetailsFromToken = async (token) => {
    if (!token) {
        return {
            message: "session out",
            logout: true,
        };
    }
    
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await UserModel.findById(decoded.id).select('-password');
        if (!user) {
            return {
                message: "User not found",
                logout: true,
            };
        }
        return user;
    } catch (error) {
        return {
            message: "Invalid token",
            logout: true,
        };
    }
};

module.exports = getUserDetailsFromToken;
