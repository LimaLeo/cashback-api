const saveStatusType = require("../resources/requests/saveStatusType.resource");
const updateStatusType = require("../resources/requests/updateStatusType.resource");
const getById = require("../resources/requests/getById.resource");
const controllers = require('../controllers/statusType.controller');

module.exports = [
  {
    method: 'POST',
    path: '/statusType',
    options: {
      handler: controllers.create,
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
      handler: controllers.updateById,
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
      handler: controllers.deleteById,
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
      handler: controllers.getById,
      tags: ['api'],
      validate: {
        params: getById,
      }
    }
  },
];
