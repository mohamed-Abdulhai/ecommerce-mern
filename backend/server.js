import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './src/DB/db.config.js'
import v1Router from './src/routers/v1.router.js'
import { AppError } from './src/utilities/error.handler.js'
dotenv.config()
const app = express()
const port = process.env.PORT
dbConnect()

app.use('/api/v1',v1Router)
    app.use('/api/v1', v1Router);
app.all('*', (req, res, next) => {
    next(new AppError('Route not found', 404))
})

app.use((err, req, res, next) => {
    const { message, status, stack } = err
    res.status(status || 500).json({
        message,
        ...(process.env.MODE === 'development' && { stack }),
    })
})


app.listen(port, () => console.log(`server is runing on http://localhost:${port}`))