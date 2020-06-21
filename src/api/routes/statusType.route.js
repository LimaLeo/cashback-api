const saveStatusType = require("../resources/requests/saveStatusType.resource");
const updateStatusType = require("../resources/requests/updateStatusType.resource");
const getById = require("../resources/requests/getById.resource");
// const controllers = require('../controllers/authentication.login.controllers');

module.exports = [
  {
    method: 'POST',
    path: '/status',
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
    path: '/status/{id}',
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
    path: '/status/{id}',
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
    path: '/status/{id}',
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
