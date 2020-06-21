const Joi = require('joi');
const saveUser = require("../resources/requests/saveUser.resource");
const updateUser = require("../resources/requests/updateUser.resource");
const getById = require("../resources/requests/getById.resource");
// const controllers = require('../controllers/authentication.login.controllers');

module.exports = [
  {
    method: 'POST',
    path: '/users',
    options: {
      handler: (request, h) => {
        return {"name":"adam"};
      },
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
      handler: (request, h) => {
        return {"name":"adam"};
      },
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
      handler: (request, h) => {
        return {"name":"adam"};
      },
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
      handler: (request, h) => {
        return {"name":"adam"};
      },
      tags: ['api'],
      validate: {
        params: getById
      }
    }
  },
];
