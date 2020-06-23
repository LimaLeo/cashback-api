const Joi = require('joi');

module.exports = {
    orderValue: Joi.number()
        .integer()
        .required(),
    userId: Joi 
        .string()
        .required(),
};