// route/student.route.js
import express from 'express'

import deleteStudentByRoll from "../controller/removestudent.controller.js";


const router = express.Router();

// router.delete("/removestudent", deleteStudentByRoll);
router.delete('/removestudent',deleteStudentByRoll)


export default router;
