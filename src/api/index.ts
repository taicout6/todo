import express from 'express'

const api = express()

api.use(express.json())
api.use(express.urlencoded({ extended: true }))

api.get('/', (_, res) => res.send())

export default api
