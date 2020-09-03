const Sequelize = require("sequelize");

let sequelize;

if (process.env.NODE_ENV == 'production') {
  require('dotenv').config({ path: process.cwd() + '/config/env/.env.prod' });
  sequelize = new Sequelize(process.env.PROD_DB_INFO)
}
else {
  require('dotenv').config({ path: process.cwd() + '/config/env/.env.dev' });
  sequelize = new Sequelize(process.env.DB, process.env.POSTGRES_ID, process.env.POSTGRES_KEY, {
    dialect: 'postgres'
  });
}

const Users = sequelize.define(
  "Users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    type: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

const Dishes = sequelize.define(
  "Dishes",
  {
    name: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

Users.sync({});
Dishes.sync({});

module.exports.Users = Users;
module.exports.Dishes = Dishes;