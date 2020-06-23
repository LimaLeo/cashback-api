"use strict";

const objectMapper = require("object-mapper");

function createRequest(entry) {
  const map = {
    "total": "ni_total",
    "userId": "ni_user_id",
  };

  return objectMapper(entry, map);
}

function createResponse(entry) {
  const map = {
    "ni_id": "id",
    "ni_total": "total",
    "ni_user_id": "userId",
    "ni_status_type_id": "statusTypeId",
  };

  return objectMapper(entry, map);
}

function updateRequest(entry) {
  const map = {
    "total": "ni_total",
    "statusTypeId": "ni_status_type_id",
    "userId": "ni_user_id",
  };

  return objectMapper(entry, map);
}

module.exports = {
  createRequest,
  createResponse,
  updateRequest,
};
