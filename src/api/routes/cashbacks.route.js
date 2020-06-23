const saveCashback = require("../resources/requests/saveCashback.resource");
const updateCashback = require("../resources/requests/updateCashback.resource");
const getById = require("../resources/requests/getById.resource");
const getByCpf = require("../resources/requests/getByCpf.resource");
const controllers = require('../controllers/cashbacks.controller');

module.exports = [
  {
    method: 'POST',
    path: '/cashbacks',
    options: {
      handler: controllers.create,
      tags: ['api'],
      validate: {
        payload: saveCashback
      }
    }
  },
  {
    method: 'PUT',
    path: '/cashbacks/{id}',
    options: {
      handler: controllers.updateById,
      tags: ['api'],
      validate: {
        params: getById,
        payload: updateCashback,
      }
    }
  },
  {
    method: 'DELETE',
    path: '/cashbacks/{id}',
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
    path: '/cashbacks/{id}',
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
    path: '/cashbacks/all/{cpf}',
    options: {
      handler: controllers.getAccumulatedByCpf,
      tags: ['api'],
      validate: {
        params: getByCpf,
      }
    }
  },
];
