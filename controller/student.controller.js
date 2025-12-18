import mongoose from "mongoose";
import Student from "../model/student.model.js";
import Counter from "../model/counter.model.js";

const addStudent = async(req,res) => {
    try {
        const {fullname,email,classs,address,fees,medium,phone} = req.body

        const student = await Student.findOne({email})

        if(student){
            return res.status(400).json({message:'Student already exist'})
        }
        const counter = await Counter.findOneAndUpdate(
        { id: "student" },
        { $inc: { seq: 1 } }, 
        { new: true, upsert: true }
    )
        const createdStudent = new Student({
            fullname:fullname,
            email:email,
            classs:classs,
            fees:fees,
            address:address,
            medium:medium,
            phone:phone,
            rollnumber:counter.seq,
        })
        await createdStudent.save()

        res.status(201).json({
            message: "Student addded successfully",
            user: {
                _id: createdStudent._id,
                fullname: createdStudent.fullname,
                email: createdStudent.email,
                fees: createdStudent.fees,
                medium: createdStudent.medium,
                address: createdStudent.address,
                classs: createdStudent.classs,
                phone:createdStudent.phone,
                rollnumber:createdStudent.rollnumber
            },
        });
    } catch (error) {
        // console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default addStudent