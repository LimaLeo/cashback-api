"use strict";

const Boom = require("@hapi/boom");
const md5 = require("md5");

const services = require("../services/users.service");
const mappers = require("../mappers/users.mapper");

const create = async (request, h) => {
    try {
        let resource = request.payload;
        resource = mappers.createRequest(resource);
        resource.tx_password = md5(resource.tx_password);
        let response  = await services.create(resource);
        response = mappers.createResponse(response);

        return response;
    } catch (error) {
        return Boom.badData(error);
    }
}

const login = async (request, h) => {
    try {
        let resource = request.payload;
        let email = resource.email;
        resource.password = md5(resource.password);
        resource = mappers.createRequest(resource);
        let exist = await services.exist(email);
        let response  = await services.login(resource);

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
    login,
}