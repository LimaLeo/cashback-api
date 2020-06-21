const Joi = require('joi');

module.exports = {
    quantity: Joi.number(),
    itemId: Joi.number()
        .integer(),
    orderId: Joi.number()
        .integer(),
};