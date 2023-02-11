/* eslint-disable import/no-unresolved */
const Hapi = require('@hapi/hapi');

async function init() {
  const server = Hapi.server({
    host: 'localhost',
    port: 9000,
  });

  await server.start();
  console.log(`server start at ${server.info.uri}`);
}

init();
