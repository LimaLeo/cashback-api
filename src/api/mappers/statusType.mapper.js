"use strict";

const objectMapper = require("object-mapper");

function createRequest(entry) {
  const map = {
    "type": "tx_type",
    "description": "tx_description",
  };

  return objectMapper(entry, map);
}

function createResponse(entry) {
  const map = {
    "ni_id": "id",
    "tx_type": "type",
    "tx_description": "description",
  };

  return objectMapper(entry, map);
}

function updateRequest(entry) {
  const map = {
    "type": "tx_type",
    "description": "tx_description",
  };

  return objectMapper(entry, map);
}




module.exports = {
  createRequest,
  createResponse,
  updateRequest,
};
