import removeTeacher from "../controller/removeteacher.controller.js";
import express from 'express'

const router = express.Router()
router.delete('/removeteacher',removeTeacher)

export default router
