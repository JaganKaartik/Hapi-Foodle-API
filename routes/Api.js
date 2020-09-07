const { displayUser, displayAllDish, deleteDish, displayDish, updateDish, addDish, deleteAll } = require('../controllers/api');
const Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/api/user/{id}',
    handler: displayUser,
    config: {
      auth: 'session',
      validate: {
        params: Joi.object({
          id: Joi.number().integer()
        })
      }
    }
  },
  {
    method: 'GET',
    path: '/api/dish/all',
    config: {
      auth: {
        strategy: 'session',
        mode: 'required'
      }
    },
    handler: displayAllDish
  },
  {
    method: 'GET',
    path: '/api/dish/{id}',
    handler: displayDish,
    config: {
      auth: {
        strategy: 'session',
        mode: 'try'
      },
      validate: {
        params: Joi.object({
          id: Joi.number().integer()
        })
      }
    }
  },
  {
    method: 'POST',
    path: '/api/dish/add',
    handler: addDish,
    config: {
      auth: 'session',
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          type: Joi.string().alphanum().required(),
          price: Joi.string().required()
        })
      }
    }
  },
  {
    method: 'PUT',
    path: '/api/dish/update',
    handler: updateDish,
    config: {
      auth: 'session',
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          price: Joi.string().required()
        })
      }
    }
  },
  {
    method: 'DELETE',
    path: '/api/dish/delete/{id}',
    handler: deleteDish,
    config: {
      auth: 'session',
      validate: {
        params: Joi.object({
          id: Joi.number().integer()
        })
      }
    }
  },
  {
    method: 'DELETE',
    path: '/api/dish/delete/all',
    config: { auth: 'session' },
    handler: deleteAll
  },
  {
    method: 'GET',
    path: '/error',
    config: {
      auth: false
    },
    handler: () => { return { 'message': 'Error' } }
  }
]

