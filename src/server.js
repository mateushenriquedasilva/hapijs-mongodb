"use strict";
const Hapi = require("@hapi/hapi");
const routes = require("./router/routes");
const connectionDatabase = require("./database/mongoose");

const PORT = 3000 || process.env.PORT;

const init = async () => {
  // config
  const server = Hapi.server({
    port: PORT,
    host: "localhost",
  });

  // router
  server.route(routes);

  // database connection
  connectionDatabase();

  // start server
  await server.start();
  console.log(`Server running on %s`, server.info.uri);
};

init();
