import Teacher from "../model/teacher.model.js";

const removeTeacher = async(req,res) => {
    try {
        const teacherid = Number(req.body.teacherid);
        const fullname = req.body.fullname.trim(); 
        console.log("Searching:", { teacherid: teacherid, fullname });

        const deletedTeacher = await Teacher.findOneAndDelete({
            teacherid: teacherid,
            fullname:fullname
        });

        if (!deletedTeacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        res.status(200).json({
            message: "Teacher deleted successfully",
            student: deletedTeacher
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

export default removeTeacher