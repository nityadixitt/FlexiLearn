import mongoose from "mongoose";

const studentsSchema= new mongoose.Schema({
    enroId:{
        required:true, unique:true,type:String
    },
    Name:{
        type:String, required:true
    },
    email:{
        type:String, required:true 
    },
    password:{
        type:String, required:true, minlength:[8, 'Password must be atleast 8 characters long']
    },
    courses:[{type: mongoose.Schema.Types.ObjectId, ref: 'Course'}],
},{timestamps:true});


export const Students=mongoose.model("Students", studentsSchema)