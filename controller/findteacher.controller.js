import Teacher from "../model/teacher.model.js";

export const getTeacher = async (req,res) => {
    try {
        const teacher = await Teacher.find()
        res.status(200).json(teacher)
    } catch (error) {
        
        res.status(500).json({message:'teacher not found'})
    }
}