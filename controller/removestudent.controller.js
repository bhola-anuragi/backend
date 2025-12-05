import Student from "../model/student.model.js";


const deleteStudentByRoll = async (req, res) => {
    try {
        // console.log("Request body:", req.body);

        const rollNumber = Number(req.body.rollNumber);
        const fullname = req.body.fullname.trim(); 
        // console.log("Searching:", { rollnumber: rollNumber, fullname });

        const deletedStudent = await Student.findOneAndDelete({
            rollnumber: rollNumber,
            fullname:fullname
        });

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({
            message: "Student deleted successfully",
            student: deletedStudent
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

    
    // try {
    //     const book = await Student.find()
    //     res.status(200).json(book)
    // } catch (error) {
    //     console.log(error)
    //     res.status(500).json(error)
    // } 

};
export default deleteStudentByRoll