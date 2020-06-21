const Joi = require('joi');

module.exports = {
    total: Joi.number(),
    userTypeId: Joi.number()
        .integer(),
};