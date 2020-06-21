const Joi = require('joi');

module.exports = {
    name: Joi.string()
        .required(),
    price: Joi
        .number()
        .required(),
};