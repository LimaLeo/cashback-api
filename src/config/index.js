const nconf = require("nconf");
const path = require("path");

const config = new nconf.Provider({
  env: true,
  argv: true,
  store: {
    type: "file",
    file: path.join(__dirname, `./config.${process.env.NODE_ENV || "dev"}.json`)
  }
});

module.exports = config;