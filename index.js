import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import studentRoute from './routes/student.route.js'
import getStudentRoute from './routes/findstudent.route.js'
import removestudentRoute from './routes/removestudent.route.js'
import adminRoute from './routes/admin.route.js'
import updatestudentRoute from './routes/updatestudent.route.js'
 

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT | 4000
const URI = process.env.MONGODB_URI


try {
    mongoose.connect(URI)
    console.log('mongodb connected')
} catch (error) {
    console.log(error)
}

app.use('/student',studentRoute)
app.use('/get',getStudentRoute)
app.use('/student',removestudentRoute)
app.use("/admin",adminRoute)
app.use("/student", updatestudentRoute);



app.listen(port,() => {
    console.log("app is listeniing",port)
})

