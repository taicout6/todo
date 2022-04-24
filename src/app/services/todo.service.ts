import { Todo } from '../../types'
import { todoModel } from '../models'

export const todoService = {
  async list(): Promise<Todo[]> {
    const result = await todoModel.list()
    return result
  }
}
