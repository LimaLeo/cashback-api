const saveOrder = require("../resources/requests/saveOrder.resource");
const updateOrder = require("../resources/requests/updateOrder.resource");
const getById = require("../resources/requests/getById.resource");
const controllers = require('../controllers/orders.controller');

module.exports = [
  {
    method: 'POST',
    path: '/orders',
    options: {
      handler: controllers.create,
      tags: ['api'],
      validate: {
        payload: saveOrder,
      }
    }
  },
  {
    method: 'PUT',
    path: '/orders/{id}',
    options: {
      handler: controllers.updateById,
      tags: ['api'],
      validate: {
        params: getById,
        payload: updateOrder,
      }
    }
  },
  {
    method: 'DELETE',
    path: '/orders/{id}',
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
    path: '/orders/{id}',
    options: {
      handler: controllers.getById,
      tags: ['api'],
      validate: {
        params: getById,
      }
    }
  },
  {
    method: 'GET',
    path: '/orders/all/',
    options: {
      handler: controllers.getAll,
      tags: ['api'],
    }
  },
];
