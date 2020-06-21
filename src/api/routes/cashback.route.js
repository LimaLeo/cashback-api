const saveCashback = require("../resources/requests/saveCashback.resource");
const updateCashback = require("../resources/requests/updateCashback.resource");
const getById = require("../resources/requests/getById.resource");
// const controllers = require('../controllers/authentication.login.controllers');

module.exports = [
  {
    method: 'POST',
    path: '/cashback',
    options: {
      handler: (request, h) => {
        return {"name":"adam"};
      },
      tags: ['api'],
      validate: {
        payload: saveCashback
      }
    }
  },
  {
    method: 'PUT',
    path: '/cashback/{id}',
    options: {
      handler: (request, h) => {
        return {"name":"adam"};
      },
      tags: ['api'],
      validate: {
        params: getById,
        payload: updateCashback,
      }
    }
  },
  {
    method: 'DELETE',
    path: '/cashback/{id}',
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
    path: '/cashback/{id}',
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
