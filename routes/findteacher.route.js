import express from 'express' 

import { getTeacher } from '../controller/findteacher.controller.js'

const router = express.Router()
router.get('/teacher',getTeacher)

export default router