const saveOrder = require("../resources/requests/saveOrder.resource");
const updateOrder = require("../resources/requests/updateOrder.resource");
const getById = require("../resources/requests/getById.resource");
// const controllers = require('../controllers/authentication.login.controllers');

module.exports = [
  {
    method: 'POST',
    path: '/orderItem',
    options: {
      handler: (request, h) => {
        return {"name":"adam"};
      },
      tags: ['api'],
      validate: {
        payload: saveOrder
      }
    }
  },
  {
    method: 'PUT',
    path: '/orderItem/{id}',
    options: {
      handler: (request, h) => {
        return {"name":"adam"};
      },
      tags: ['api'],
      validate: {
        payload: updateOrder
      }
    }
  },
  {
    method: 'DELETE',
    path: '/orderItem/{id}',
    options: {
      handler: (request, h) => {
        return {"name":"adam"};
      },
      tags: ['api'],
      validate: {
        params: getById,
      }
    }
  },
  {
    method: 'GET',
    path: '/orderItem/{id}',
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
