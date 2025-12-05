import express from "express";
import { updateStudentName } from "../controller/updatestudent.controller.js";

const router = express.Router();

router.put("/update/student", updateStudentName);

export default router;
 