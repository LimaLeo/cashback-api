"use strict";

const objectMapper = require("object-mapper");

function createRequest(entry) {
  const map = {
    "orderValue": "ni_order_value",
    "userId": "ni_user_id",
  };

  return objectMapper(entry, map);
}

function createResponse(entry) {
  const map = {
    "ni_id": "id",
    "ni_order_value": "orderValue",
    "ni_value": "value",
    "ni_percentage": "percentage",
    "ni_user_id": "userId",
  };

  return objectMapper(entry, map);
}

function updateRequest(entry) {
  const map = {
    "ni_order_value": "orderValue",
    "ni_value": "value",
    "ni_percentage": "percentage",
    "ni_user_id": "userId",
  };

  return objectMapper(entry, map);
}




module.exports = {
  createRequest,
  createResponse,
  updateRequest,
};
