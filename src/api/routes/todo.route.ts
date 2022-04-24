import { Router } from 'express'
import { todoController } from '../../app/controllers'

const todoRoute = Router()

// addTodo
// todoRoute.post('/', async (req, res) => {
//   res.send(req)
// })

// getTodo
// todoRoute.get('/:id', async (req, res) => {
//   res.send(req)
// })

// listTodo
todoRoute.get('/', async (_req, res) => {
  const result = await todoController.list()
  res.json(result)
})

// editTodo
// todoRoute.put('/:id', async (req, res) => {
//   res.send(req)
// })

// removeTodo
// todoRoute.delete('/:id', async (req, res) => {
//   res.send(req)
// })

export { todoRoute }
