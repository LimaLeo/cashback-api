"use strict";

const services = require("../services/users.service");
const mappers = require("../mappers/users.mapper");

const create = async (request, h) => {
    try {
        let resource = request.payload;
        resource = mappers.createRequest(resource);
        resource.create_at = new Date().toDateString();
        let response  = await services.create(resource);
        response = mappers.createResponse(response);

        return response;
    } catch (error) {
        return new Error(error);
    }
}

module.exports = {
    create,
}