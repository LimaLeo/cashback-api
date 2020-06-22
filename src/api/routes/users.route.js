const Joi = require('joi');
const saveUser = require("../resources/requests/saveUser.resource");
const updateUser = require("../resources/requests/updateUser.resource");
const getById = require("../resources/requests/getById.resource");
const controllers = require('../controllers/users.controller');

module.exports = [
  {
    method: 'POST',
    path: '/users',
    options: {
      handler: controllers.create,
      tags: ['api'],
      validate: {
        payload: saveUser
      }
    }
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    options: {
      handler: controllers.updateById,
      tags: ['api'],
      validate: {
        params: getById,
        payload: updateUser
      }
    }
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    options: {
      handler: controllers.deleteById,
      tags: ['api'],
      validate: {
        params: getById
      }
    }
  },
  {
    method: 'GET',
    path: '/users/{id}',
    options: {
      handler: controllers.getById,
      tags: ['api'],
      validate: {
        params: getById
      }
    }
  },
];
