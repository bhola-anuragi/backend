import express from 'express'
import { getStudent } from '../controller/findstudent.controller.js'


const router = express.Router()

router.get('/student',getStudent)

export default router