const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },  // Reference to the student
  classes: [{
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },  // Reference to the Class
    day: { type: String, required: true },  // Day of the week (e.g., 'Monday')
    time: { type: String, required: true }  // Time for the class (e.g., '9:00 AM - 11:00 AM')
  }]
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
