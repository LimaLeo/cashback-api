const Joi = require('joi');

module.exports = {
    type: Joi.string()
        .required(),
    description: Joi.string()
        .required(),
};