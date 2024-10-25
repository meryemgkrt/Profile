const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const routerUser = require("./router/routerUser");
const cookieParser = require('cookie-parser');

const app = express();

// Middleware for CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Middleware for parsing JSON and cookies
app.use(express.json());

app.use(cookieParser())

// Log environment variables for debugging
console.log('CLIENT_URL:', process.env.CLIENT_URL);
console.log('MONGODB_URL:', process.env.MONGODB_URL);
console.log('JWT_SECRET_KEY:', process.env.JWT_SECRET_KEY);

const PORT = process.env.PORT || 8000;

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" + PORT });
});

// User routes
app.use("/api", routerUser);

// Connect to MongoDB and start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});