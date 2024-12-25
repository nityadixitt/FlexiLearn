const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  enrollmentId: { type: String, unique: true, required: true },
  password: { type: String, required: true }, // Hashed password (store securely)
});

module.exports = mongoose.model('Login', LoginSchema);
