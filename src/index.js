const fastify = require("fastify")({
  logger: true,
});
const dotenv = require("dotenv");

const routes = require("./routes");

dotenv.config();

require("./database");

fastify.register(routes);

const start = async () => {
  try {
    await fastify.ready();
    await fastify.listen(process.env.PORT);
    fastify.log.info(`Server listening on: ${fastify.server.address().port}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit();
  }
};

start();
