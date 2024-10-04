import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { dbConnect } from './src/DB/db.config.js'
import v1Router from './src/routers/v1.router.js'
import { AppError } from './src/utilities/error.handler.js'


dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(morgan('dev'))
const port = process.env.PORT
dbConnect()


app.use('/api/v1', v1Router);
app.all('*', (req, res, next) => {
    next(new AppError('Route not found', 404,'Failed'))
})

app.use('*',cors())
app.use((err, req, res, next) => {
    const { message, statusCode, status ,stack } = err
    res.status(statusCode || 500).json({
        message,status,
        ...(process.env.MODE === 'development' && { stack }),
    })
})


app.listen(port, () => console.log(`server is runing on http://localhost:${port}`))