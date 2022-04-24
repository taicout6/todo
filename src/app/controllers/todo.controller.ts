import { Todo } from '../../types'
import { todoService } from '../services/todo.service'

export const todoController = {
  async list(): Promise<Todo[]> {
    const result = await todoService.list()
    return result
  }
}
