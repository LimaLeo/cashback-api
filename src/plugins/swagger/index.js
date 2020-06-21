module.exports = [
  require("@hapi/inert"),
  require("@hapi/vision"),
  {
    plugin: require("hapi-swagger"),
    options: {
      info: {
        title: "Cashback Api",
        description: "Cashback Api Documentation",
        version: "1.0"
      },
      swaggerUI: true,
      documentationPage: true,
      documentationPath: "/docs"
    }
  }
];