const saveItem = require("../resources/requests/saveItem.resource");
const getById = require("../resources/requests/getById.resource");
// const controllers = require('../controllers/authentication.login.controllers');

module.exports = [
  {
    method: 'POST',
    path: '/item',
    options: {
      handler: (request, h) => {
        return { "name": "adam" };
      },
      tags: ['api'],
      validate: {
        payload: saveItem,
      }
    }
  },
  {
    method: 'PUT',
    path: '/item/{id}',
    options: {
      handler: (request, h) => {
        return { "name": "adam" };
      },
      tags: ['api'],
      validate: {
        params: getById,
        payload: saveItem,
      }
    }
  },
  {
    method: 'DELETE',
    path: '/item/{id}',
    options: {
      handler: (request, h) => {
        return { "name": "adam" };
      },
      tags: ['api'],
      validate: {
        params: getById
      }
    }
  },
  {
    method: 'GET',
    path: '/item/{id}',
    options: {
      handler: (request, h) => {
        return { "name": "adam" };
      },
      tags: ['api'],
      validate: {
        params: getById
      }
    }
  },
];
