const fastify = require("fastify")({
  logger: true,
});
const dotenv = require("dotenv");

const routes = require("./routes");

const swagger = require("./utils/swagger");

dotenv.config();

require("./database");

fastify.register(require("fastify-swagger"), swagger.options);

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
