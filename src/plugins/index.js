const swagger = require("./swagger");
const logger = require("./logger");

const plugins = [
    ...swagger,
    ...logger,
];

module.exports = plugins;