const Sequelize = require('sequelize')

let sequelize

if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: './config/.env.prod' })
  sequelize = new Sequelize(process.env.PROD_DB_URL)
  const SeedFn = require('../seed')
  SeedFn()
} else {
  require('dotenv').config({ path: './config/.env.dev' })
  sequelize = new Sequelize(
    process.env.DB,
    process.env.POSTGRES_ID,
    process.env.POSTGRES_KEY,
    {
      dialect: 'postgres',
    }
  )
}




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

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

Dishes.sync({})
module.exports.Dishes = Dishes
