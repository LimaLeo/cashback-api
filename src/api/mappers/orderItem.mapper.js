"use strict";

const objectMapper = require("object-mapper");

function createRequest(entry) {
  const map = {
    "quantity": "ni_quantity",
    "itemId": "ni_item_id",
    "orderId": "ni_order_id",
  };

  return objectMapper(entry, map);
}

function createResponse(entry) {
  const map = {
    "ni_id": "id",
    "ni_quantity": "quantity",
    "ni_item_id": "itemId",
    "ni_order_id": "orderId",
  };

  return objectMapper(entry, map);
}

function updateRequest(entry) {
  const map = {
    "quantity": "ni_quantity",
  };

  return objectMapper(entry, map);
}




module.exports = {
  createRequest,
  createResponse,
  updateRequest,
};
