const { displayAllDish, deleteDish, displayDish, updateDish, addDish, deleteAll } = require('../controllers/api');
const Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/api/dish/all',
    options: {
      handler: displayAllDish,
      // auth: { mode: 'required' }
    }
  },
  {
    method: 'GET',
    path: '/api/dish/{id}',
    options: {
      auth: {
        strategy: 'session'
      },
      handler: displayDish,
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
    options: {
      auth: {
        strategy: 'session',
        mode: 'try'
      },
      handler: addDish,
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
    options: {
      auth: {
        strategy: 'session',
        mode: 'try'
      },
      handler: updateDish,
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
    options: {
      auth: {
        strategy: 'session',
        mode: 'try'
      },
      handler: deleteDish,
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
    options: {
      auth: {
        strategy: 'session',
        mode: 'try'
      },
    },
    handler: deleteAll
  },
  {
    method: 'GET',
    path: '/error',
    options: {
      auth: false
    },
    handler: () => { return { 'message': 'Error' } }
  }
]

