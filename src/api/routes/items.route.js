const saveItem = require("../resources/requests/saveItem.resource");
const getById = require("../resources/requests/getById.resource");
const controllers = require('../controllers/items.controller');

module.exports = [
  {
    method: 'POST',
    path: '/items',
    options: {
      handler: controllers.create,
      tags: ['api'],
      validate: {
        payload: saveItem,
      }
    }
  },
  {
    method: 'PUT',
    path: '/items/{id}',
    options: {
      handler: controllers.updateById,
      tags: ['api'],
      validate: {
        params: getById,
        payload: saveItem,
      }
    }
  },
  {
    method: 'DELETE',
    path: '/items/{id}',
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
    path: '/items/{id}',
    options: {
      handler: controllers.getById,
      tags: ['api'],
      validate: {
        params: getById
      }
    }
  },
];
