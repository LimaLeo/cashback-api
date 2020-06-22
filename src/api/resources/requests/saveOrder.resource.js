const Joi = require('joi');

module.exports = {
    total: Joi.number(),
    userId: Joi.number()
        .integer(),
};