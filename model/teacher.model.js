import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    teacherid:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    period:{
        type:String,
        required:true
    },
    paidsalary:{
        type: Number
    }

},
{
    Timestamp:true
}
)


const Teacher = mongoose.model('Teacher',teacherSchema)

export default Teacher