import Teacher from "../model/teacher.model.js";
import TeacherId from "../model/teacherid.model.js";

const AddTeacher = async (req,res) => {
    try {
        const {fullname,email,period,salary,phone,subject,paidsalary} = req.body

        const teacher = await Teacher.findOne({email})
        if(teacher){
            return res.status(400).json({message:'Teacher already exist'})
        }
        const counter = await TeacherId.findOneAndUpdate(
        { id: "teacher" },
        { $inc: { seq: 1 } }, 
        { new: true, upsert: true })

        const createdTeacher = new Teacher({
            fullname:fullname,
            email:email,
            period:period,
            salary:salary,
            teacherid:counter.seq,
            phone:phone,
            subject:subject,
            paidsalary:paidsalary
        })
        await createdTeacher.save()
        res.status(201).json({
            message: "Teacher addded successfully",
            user: {
                _id: createdTeacher._id,
                fullname: createdTeacher.fullname,
                email: createdTeacher.email,
                salary: createdTeacher.salary,
                subject: createdTeacher.subject,
                phone: createdTeacher.phone,
                period: createdTeacher.period,
                teacherid:createdTeacher.teacherid,
                paidsalary:createdTeacher.paidsalary
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export default AddTeacher