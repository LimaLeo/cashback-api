const Joi = require('joi');
const saveUser = require("../resources/requests/saveUser.resource");
const updateUser = require("../resources/requests/updateUser.resource");
const getById = require("../resources/requests/getById.resource");
// const controllers = require('../controllers/authentication.login.controllers');

module.exports = [
  {
    method: 'POST',
    path: '/user',
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
    path: '/user/{id}',
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
    path: '/user/{id}',
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
    path: '/user/{id}',
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
