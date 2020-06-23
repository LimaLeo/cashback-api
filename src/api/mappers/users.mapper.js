"use strict";

const objectMapper = require("object-mapper");

function createRequest(entry) {
  const map = {
    "firstName": "tx_firstName",
    "lastName": "tx_lastName",
    "cpf": "tx_cpf",
    "email": "tx_email",
    "password": "tx_password",
  };

  return objectMapper(entry, map);
}

function createResponse(entry) {
  const map = {
    "ni_id": "id",
    "tx_firstName": "firstName",
    "tx_lastName": "lastName",
    "tx_cpf": "cpf",
    "tx_email": "email",
  };

  return objectMapper(entry, map);
}

function updateRequest(entry) {
  const map = {
    "firstName": "tx_firstName",
    "lastName": "tx_lastName",
    "cpf": "tx_cpf",
  };

  return objectMapper(entry, map);
}




module.exports = {
  createRequest,
  createResponse,
  updateRequest,
};
