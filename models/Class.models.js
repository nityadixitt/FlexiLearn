const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },  // Reference to the course
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty', required: true },  // Reference to the faculty
  timeSlot: { type: String, required: true },  // E.g., 'Monday 9:00 AM - 11:00 AM'
  location: { type: String },  // Optional: Location of the class
  maxStudents: { type: Number, default: 70 },  // Max number of students in the class
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]  // Array of students enrolled in the class
});

module.exports = mongoose.model('Class', ClassSchema);
