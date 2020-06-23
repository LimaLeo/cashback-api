const Joi = require('joi');

module.exports = {
    email: Joi.string()
        .required(),
    password: Joi.string()
        .required(),
};