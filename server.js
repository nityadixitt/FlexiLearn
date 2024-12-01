
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const app = express();
  const userSchema=new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true, 
      match: /^[A-Za-z0-9]{6,10}$/, 
  },
  password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8 
  },
  })
  const User = mongoose.model("User", userSchema);
  module.exports = { User };
  
app.use(express.static("public"));

// Route to serve the login page
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/8.html");
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Simulating a login process with hardcoded data
  const mockUser = {
      username: "ADT23SOCB0657",
      password: "password123"
  };

  
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).send("Invalid username");
    }

    // Simulate password verification (this would ideally use a hash comparison)
    if (user.password !== password) {
      return res.status(400).send("Invalid password");
    }

    return res.send("Login successful");

  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
const githubData= {
  "login": "nityadixitt",
  "id": 186256656,
  "node_id": "U_kgDOCxoNEA",
  "avatar_url": "https://avatars.githubusercontent.com/u/186256656?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/nityadixitt",
  "html_url": "https://github.com/nityadixitt",
  "followers_url": "https://api.github.com/users/nityadixitt/followers",
  "following_url": "https://api.github.com/users/nityadixitt/following{/other_user}",
  "gists_url": "https://api.github.com/users/nityadixitt/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/nityadixitt/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/nityadixitt/subscriptions",
  "organizations_url": "https://api.github.com/users/nityadixitt/orgs",
  "repos_url": "https://api.github.com/users/nityadixitt/repos",
  "events_url": "https://api.github.com/users/nityadixitt/events{/privacy}",
  "received_events_url": "https://api.github.com/users/nityadixitt/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-10-25T05:06:08Z",
  "updated_at": "2024-10-25T05:07:14Z"
}





app.use(express.json()); // Middleware to parse JSON requests

// Example route
app.get("/", (req, res) => {
  res.send("Welcome to the FlexiLearn API");
});
app.get("/github", (req,res)=>{
  res.json(githubData)
});
const PORT = process.env.PORT || 5000; // Set the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

