import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    fullname:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    address:{
        type:String,
        required:true,
        
    },
    classs:{
        type:String,
        required:true, 
        
    },
    fees:{
        type:Number,
        required:true,
        
    },
    medium:{
        type:String,
        required:true,
        
    },
    rollnumber: {
        type: Number,
        unique: true,
        required:true
        // default:1000
    }

},
{
    timestamps:true
}
)


const Student = mongoose.model('Student',studentSchema)

export default Student