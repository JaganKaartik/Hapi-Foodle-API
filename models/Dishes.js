const sequelize = require('./connector')

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

Dishes.sync({})
module.exports.Dishes = Dishes
