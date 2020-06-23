const Joi = require('joi');

module.exports = {
    total: Joi.number(),
    statusTypeId: Joi.number()
        .integer(),
    userId: Joi.number()
        .integer(),
};