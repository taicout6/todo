import { Router } from 'express'

const todoRoute = Router()

// addTodo
todoRoute.post('/', async (req, res) => {
  res.send(req)
})

// getTodo
todoRoute.get('/:id', async (req, res) => {
  res.send(req)
})

// listTodo
todoRoute.get('/', async (req, res) => {
  res.send(req)
})

// editTodo
todoRoute.put('/:id', async (req, res) => {
  res.send(req)
})

// removeTodo
todoRoute.delete('/:id', async (req, res) => {
  res.send(req)
})

export { todoRoute }
