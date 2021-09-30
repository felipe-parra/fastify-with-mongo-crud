const { getTaquitos } = require("../controllers/taquito.controller");
const taquitoRoutes = require("./taquito.routes");

async function routes(fastify, options) {
//   fastify.get('/', getTaquitos)
taquitoRoutes.forEach((route) => {
  fastify.route(route, { prefix: "/v1" });
});

}

module.exports = routes