const Joi = require('joi');

module.exports = {
    orderValue: Joi.number()
        .required(),
    userId: Joi 
        .number()
        .required(),
};