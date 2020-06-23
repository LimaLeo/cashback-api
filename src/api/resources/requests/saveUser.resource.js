const Joi = require('joi');

module.exports = {
    firstName: Joi.string()
        .required(),
    lastName: Joi.string()
        .required(),
    cpf: Joi.string()
        .required(),
    email: Joi.string()
        .required(),
    password: Joi.string()
        .required(),
};