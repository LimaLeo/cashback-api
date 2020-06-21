const saveOrder = require("../resources/requests/saveOrder.resource");
const updateOrder = require("../resources/requests/updateOrder.resource");
const getById = require("../resources/requests/getById.resource");
// const controllers = require('../controllers/authentication.login.controllers');

module.exports = [
  {
    method: 'POST',
    path: '/order',
    options: {
      handler: (request, h) => {
        return {"name":"adam"};
      },
      tags: ['api'],
      validate: {
        payload: saveOrder,
      }
    }
  },
  {
    method: 'PUT',
    path: '/order/{id}',
    options: {
      handler: (request, h) => {
        return {"name":"adam"};
      },
      tags: ['api'],
      validate: {
        params: getById,
        payload: updateOrder,
      }
    }
  },
  {
    method: 'DELETE',
    path: '/order/{id}',
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
    path: '/order/{id}',
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
];
