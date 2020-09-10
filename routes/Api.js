const {
  displayAllDish,
  deleteDish,
  displayDish,
  updateDish,
  addDish,
  deleteAll,
} = require('../controllers/api')
const Joi = require('joi')

module.exports = [
  {
    method: 'GET',
    path: '/a/all',
    options: {
      handler: displayAllDish,
      auth: { mode: 'required' },
    },
  },
  {
    method: 'GET',
    path: '/a/{id}',
    options: {
      auth: { mode: 'required' },
      handler: displayDish,
      validate: {
        params: Joi.object({
          id: Joi.number().integer(),
        }),
      },
    },
  },
  {
    method: 'POST',
    path: '/api/add',
    options: {
      auth: { mode: 'required' },
      handler: addDish,
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          type: Joi.string().alphanum().required(),
          price: Joi.string().required(),
        }),
      },
    },
  },
  {
    method: 'PUT',
    path: '/api/update',
    options: {
      auth: { mode: 'required' },
      handler: updateDish,
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          price: Joi.string().required(),
        }),
      },
    },
  },
  {
    method: 'DELETE',
    path: '/api/delete/{id}',
    options: {
      auth: { mode: 'required' },
      handler: deleteDish,
      validate: {
        params: Joi.object({
          id: Joi.number().integer(),
        }),
      },
    },
  },
  {
    method: 'DELETE',
    path: '/api/delete/all',
    options: {
      auth: { mode: 'required' },
      handler: deleteAll,
    },
  },
]
