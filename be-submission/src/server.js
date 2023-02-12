/* eslint-disable import/no-unresolved */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

async function init() {
  const server = Hapi.server({
    host: 'localhost',
    port: 9000,
  });

  server.route(routes);

  await server.start();
  console.log(`server start at ${server.info.uri}`);
}

init();
