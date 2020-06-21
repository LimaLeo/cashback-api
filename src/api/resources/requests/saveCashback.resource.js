const Joi = require('joi');

module.exports = {
    value: Joi.number()
        .integer()
        .required(),
    userId: Joi
        .string()
        .required(),
};