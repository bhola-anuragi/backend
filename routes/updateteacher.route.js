import express from "express";
import { updateTeacher } from "../controller/updateteacher.controller.js";

const router = express.Router();

router.put("/update/teacher", updateTeacher);

export default router;
  