const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
    },
    profilePicture: {
        type: String,
        default: ""
    },
}, {
    timestamps: true
});

// Create the user model
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;