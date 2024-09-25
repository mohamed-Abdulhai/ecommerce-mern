import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './src/DB/db.config.js'

dotenv.config()
const app = express()
const port = process.env.PORT
dbConnect()

app.listen(port, () => console.log(`server is runing on http://localhost:${port}`))