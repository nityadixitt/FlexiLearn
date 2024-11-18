const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected successfully");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});

app.use(express.json()); // Middleware to parse JSON requests

// Example route
app.get("/", (req, res) => {
  res.send("Welcome to the FlexiLearn API");
});

const PORT = process.env.PORT || 5000; // Set the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
