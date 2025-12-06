import mongoose from "mongoose";

const TeacherIdSchema = mongoose.Schema({
  id: {
        type: String,
        required: true
    },
  seq: { 
        type: Number,
        default: 1000
    }
});

const TeacherId =  mongoose.model('TeacherId', TeacherIdSchema);

export default TeacherId