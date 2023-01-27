import express, { Express, Request, Response } from 'express'
import caseStatusRoute from './routes/caseStatus'
import dotenv from 'dotenv'
import rateLimiter from './middleware/rateLimiter'
const cors = require('cors')

dotenv.config()
const app: Express = express()
const port = process.env.PORT

app.use(rateLimiter)
app.use(cors({  origin: '*' }))

app.get('/case/:id', caseStatusRoute)

app.listen(port)