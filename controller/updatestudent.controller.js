import Student from '../model/student.model.js'
export const updateStudentName = async (req, res) => {
  try {
    const { rollNumber, newName, newEmail, newClass, newAddress, newMedium, newFees } = req.body;

    const roll = Number(rollNumber);

    const updateFields = {};

    if (newName) updateFields.fullname = newName;
    if (newEmail) updateFields.email = newEmail;
    if (newClass) updateFields.classs = newClass;
    if (newMedium) updateFields.medium = newMedium;
    if (newAddress) updateFields.address = newAddress;
    if (newFees !== undefined && newFees !== "") {
      updateFields.fees = Number(newFees);
    }

    console.log("Update fields:", updateFields); 

    const updatedStudent = await Student.findOneAndUpdate(
      { rollnumber: roll },
      { $set: updateFields },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student updated successfully ✅",
      student: updatedStudent
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
