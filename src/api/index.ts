import express from 'express'
import 'express-async-errors'
import { errorHandlerMiddleware } from './middlewares'
import { corsMiddleware } from './middlewares/cors.middleware'
import { todoRoute } from './routes'

const api = express()

api.use(express.json())
api.use(express.urlencoded({ extended: true }))
api.use(corsMiddleware)

api.use('/todo', todoRoute)
api.get('/', (_, res) => res.send())

api.use(errorHandlerMiddleware)

export default api
