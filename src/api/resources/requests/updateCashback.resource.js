const Joi = require('joi');

module.exports = {
    status: Joi.boolean(),
    orderId: Joi.number()
        .integer(),
};