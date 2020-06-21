const saveStatusType = require("../resources/requests/saveStatusType.resource");
const updateStatusType = require("../resources/requests/updateStatusType.resource");
const getById = require("../resources/requests/getById.resource");
// const controllers = require('../controllers/authentication.login.controllers');

module.exports = [
  {
    method: 'POST',
    path: '/statusType',
    options: {
      handler: (request, h) => {
        return {"name":"adam"};
      },
      tags: ['api'],
      validate: {
        payload: saveStatusType,
      }
    }
  },
  {
    method: 'PUT',
    path: '/statusType/{id}',
    options: {
      handler: (request, h) => {
        return {"name":"adam"};
      },
      tags: ['api'],
      validate: {
        params: getById,
        payload: updateStatusType,
      }
    }
  },
  {
    method: 'DELETE',
    path: '/statusType/{id}',
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
    path: '/statusType/{id}',
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
