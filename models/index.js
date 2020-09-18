const Sequelize = require('sequelize')

let sequelize

if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(process.env.PROD_DB_URL)
} else {
  // require('dotenv').config()
  sequelize = new Sequelize(
    process.env.DB,
    process.env.POSTGRES_ID,
    process.env.POSTGRES_KEY,
    {
      host: process.env.HOST,
      dialect: 'postgres'
    }

  )
}

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = { sequelize }
