import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import mongoose from 'mongoose'
import authRouter from './routers/authRouter.js'
import userRouter from './routers/userRouter.js'

const app = express()

dotenv.config({path: './config/config.env'})

connectDB()


app.use(express.json())
app.use(cors())
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`)
})
