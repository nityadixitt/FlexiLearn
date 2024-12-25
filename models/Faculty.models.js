import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema({
  facultyId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  expertise: { type: String, required: true }, // Subject expertise
  availability: { type: Boolean, default: true }, // Faculty availability
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }], // Courses the faculty teaches
});
 export const Faculty= mongoose.model('Faculty', FacultySchema);
