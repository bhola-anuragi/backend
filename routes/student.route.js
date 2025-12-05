import express from 'express'
import addStudent from '../controller/student.controller.js'


const router = express.Router()

router.post('/addstudent',addStudent)

export default router