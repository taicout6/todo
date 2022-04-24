import { Sequelize } from 'sequelize'
import vars from '../vars'
import makeTodo from './todo.dao'

const sequelize = new Sequelize(vars.db.url, {
  dialect: 'mysql'
})

export const TodoDAO = makeTodo(sequelize)

export default sequelize
