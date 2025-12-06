import Student from "../model/student.model.js";

export const updateStudentName = async (req, res) => {
  try {
    const { rollNumber, newName,newEmail,newClass,newAddress,newMedium,newFees } = req.body;

    // roll को number में convert
    const fees = Number(newFees)
    const roll = Number(rollNumber); 
    const updatedStudent = await Student.findOneAndUpdate(
      { rollnumber: roll },                 // किसे update करना है
      { $set: { 
        fullname: newName ,
        email:newEmail,
        classs:newClass,
        medium:newMedium,
        address:newAddress,
        fees:fees
      } },      // क्या update करना है
      { new: true }                          // updated data वापस चाहिये
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student updated successfully",
      student: updatedStudent
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
    res.status(500).json({message: 'wrong name or roll'})
  }
};
