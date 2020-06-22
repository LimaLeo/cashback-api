const saveOrder = require("../resources/requests/saveOrder.resource");
const updateOrder = require("../resources/requests/updateOrder.resource");
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
        payload: saveOrder
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
        payload: updateOrder
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
