"use strict";

const objectMapper = require("object-mapper");

function createRequest(entry) {
  const map = {
    "value": "ni_value",
    "userId": "ni_user_id",
  };

  return objectMapper(entry, map);
}

function createResponse(entry) {
  const map = {
    "ni_id": "id",
    "ni_value": "value",
    "ni_user_id": "userId",
  };

  return objectMapper(entry, map);
}

function updateRequest(entry) {
  const map = {
    "status": "bl_status",
    "orderId": "ni_order_id",
  };

  return objectMapper(entry, map);
}




module.exports = {
  createRequest,
  createResponse,
  updateRequest,
};
