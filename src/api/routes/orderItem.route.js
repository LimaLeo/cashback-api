const saveOrderItem = require("../resources/requests/saveOrderItem.resource");
const updateOrderItem = require("../resources/requests/updateOrderItem.resource");
const getById = require("../resources/requests/getById.resource");
const controllers = require('../controllers/orderItem.controller');

module.exports = [
  {
    method: 'POST',
    path: '/orderItems',
    options: {
      handler: controllers.create,
      tags: ['api'],
      validate: {
        payload: saveOrderItem
      }
    }
  },
  {
    method: 'PUT',
    path: '/orderItems/{id}',
    options: {
      handler: controllers.updateById,
      tags: ['api'],
      validate: {
        params: getById,
        payload: updateOrderItem
      }
    }
  },
  {
    method: 'DELETE',
    path: '/orderItems/{id}',
    options: {
      handler: controllers.deleteById,
      tags: ['api'],
      validate: {
        params: getById,
      }
    }
  },
  {
    method: 'GET',
    path: '/orderItems/{id}',
    options: {
      handler: controllers.getById,
      tags: ['api'],
      validate: {
        params: getById
      }
    }
  },
];
