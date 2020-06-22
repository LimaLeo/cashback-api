"use strict";

const objectMapper = require("object-mapper");

function createRequest(entry) {
  const map = {
    "name": "tx_name",
    "price": "ni_price",
  };

  return objectMapper(entry, map);
}

function createResponse(entry) {
  const map = {
    "ni_id": "id",
    "tx_name": "name",
    "ni_price": "price",
  };

  return objectMapper(entry, map);
}

function updateRequest(entry) {
  const map = {
    "name": "tx_name",
    "price": "ni_price",
  };

  return objectMapper(entry, map);
}




module.exports = {
  createRequest,
  createResponse,
  updateRequest,
};
