"use strict";

const Boom = require("@hapi/boom");

const services = require("../services/orders.service");
const mappers = require("../mappers/orders.mapper");

const create = async (request, h) => {
    try {
        let resource = request.payload;
        resource = mappers.createRequest(resource);
        let response  = await services.create(resource);
        response = mappers.createResponse(response);

        return response;
    } catch (error) {
        return Boom.badData(error);
    }
}

const updateById = async (request, h) => {
    try {
        let id = request.params.id;
        let resource = request.payload;
        resource = mappers.updateRequest(resource);
        let response  = await services.updateById(id, resource);

        return response;
    } catch (error) {
        return Boom.badData(error);
    }
}

const getById = async (request, h) => {
    try {
        let id = request.params.id;
        let response  = await services.getById(id);
        response = mappers.createResponse(response);

        return response;
    } catch (error) {
        return Boom.badData(error);
    }
}

const getAllById = async (request, h) => {
    try {
        let id = request.params.id;
        let response  = await services.getAllById(id);
        // response = mappers.createResponse(response);

        return response;
    } catch (error) {
        return Boom.badData(error);
    }
}

const deleteById = async (request, h) => {
    try {
        let id = request.params.id;
        let response  = await services.deleteById(id);

        return response;
    } catch (error) {
        return Boom.badData(error);
    }
}

module.exports = {
    create,
    updateById,
    getById,
    deleteById,
    getAllById,
}