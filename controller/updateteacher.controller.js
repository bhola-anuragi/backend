import Teacher from "../model/teacher.model.js";


export const updateTeacher = async (req, res) => {
  try {
    const { teacherid, newName,paidsalary, newEmail, newPeriod, newSalary, newSubject,newPhone} = req.body;
    // console.log('newfees : ',newFees)
    const id = Number(teacherid);
    const phoneNo = Number(newPhone)
    const salary = Number(newSalary)
    const newpaidsalary = Number(paidsalary)
    const updateFields = {}; 

    console.log(teacherid)

    if (newName) updateFields.fullname = newName; 
    if (newEmail) updateFields.email = newEmail;
    if (newPeriod) updateFields.period = newPeriod;
    if (salary) updateFields.salary = salary;
    if (newSubject) updateFields.subject = newSubject;
    if (phoneNo) updateFields.phone = phoneNo
    if (paidsalary) updateFields.paidsalary = newpaidsalary

    // console.log(updateFields)
    const updateTeacher = await Teacher.findOneAndUpdate(
      {teacherid: id },
      { $set: updateFields },
      { new: true, runValidators: true }
    );
    // console.log(updateTeacher)

    if (!updateTeacher) {
      return res.status(404).json({ message: "teacher not found" });
    }
    // console.log(object)
    res.status(200).json({
      message: "Teacher updated successfully ✅",
      student: updateTeacher
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
