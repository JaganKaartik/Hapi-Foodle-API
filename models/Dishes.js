const Sequelize = require('sequelize')
const sequelize = require('./connector').sequelize

const Dishes = sequelize.define(
    'Dishes',
    {
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

module.exports.Dishes = Dishes
