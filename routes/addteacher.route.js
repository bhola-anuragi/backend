import express from 'express'
import AddTeacher from '../controller/addteacher.controller.js'

const router = express.Router()

router.post('/addteacher',AddTeacher)

export default router