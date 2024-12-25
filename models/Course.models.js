import mongoose, { Schema } from "mongoose";

const courseSchema= new mongoose.Schema({
 courseId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  faculty: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' }], 
  timeSlots: [{ type: String }], 
  maxStudents: { type: Number, default: 70 }, 
}, {});


export const Course= mongoose.model("Course", courseSchema)