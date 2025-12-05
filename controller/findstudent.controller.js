import Student from "../model/student.model.js";

export const getStudent = async(req,res) => {
    try {
        const book = await Student.find()
        res.status(200).json(book)
    } catch (error) {
        // console.log(error)
        res.status(500).json({message:'student not found'})
    } 
}