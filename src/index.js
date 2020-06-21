const Hapi = require("@hapi/hapi");
const dotenv = require("dotenv");

const plugins = require("./plugins");
const routes = require("./utils/routes");
const config = require("./config");
const connect = require("./connect");

async function start() {
  const server = new Hapi.Server({
    debug: { request: ['error'] },
    host: 'localhost',
    port: config.get("server").port,
    routes: {
      cors: {
        origin: ["*"]
      }
    }
  });

  dotenv.config();

  await server.register(plugins);
  server.log("info", "✅ All plugins registered successfully.");

  server.app.redis = connect.redis;
  server.log("info", "✅ Redis connected successfully.");

  server.route(await routes());
  server.log("info", "✅ All routes registered sucessfully.");

  server.start();
  server.log("info", `✅ Happy C&A running at ${server.info.uri}`);
}

// Catch unhandling unexpected exceptions
process.on("uncaughtException", (error) => {
  console.error(`uncaughtException ${error.message}`);
});

// Catch unhandling rejected promises
process.on("unhandledRejection", (reason) => {
  if (reason.syscall !== 'listen') {
    console.error(reason);
    throw reason;
  }

  switch (reason.code) {
    case 'EACCES':
      console.error('Requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${config.server.port} is already in use`);
      process.exit(1);
      break;
    default:
      throw reason;
  }
});

start();