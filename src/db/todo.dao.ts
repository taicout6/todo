import { Sequelize, DataTypes } from 'sequelize'

const makeTodo = (sequelize: Sequelize) => {
  const model = sequelize.define('todos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE(3)
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE(3)
    },
  }, {
    timestamps: false,
    tableName: 'todos'
  })
  return model
}

export default makeTodo
