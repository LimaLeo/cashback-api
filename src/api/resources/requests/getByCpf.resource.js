const Joi = require('joi');

module.exports = {
    cpf: Joi
        .string()
        .required(),
};