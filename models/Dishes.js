const Sequelize = require('sequelize')
const sequelize = require('./').sequelize

const Dishes = sequelize.define(
  'Dishes',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
)

Dishes.sync()

module.exports.Dishes = Dishes
