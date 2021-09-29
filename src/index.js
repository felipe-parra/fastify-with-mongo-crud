const fastify = require("fastify")({
  logger: true,
});

fastify.get("/", (req, res) => {
  res.send({ msg: "Hello World!" });
});

const start = async () => {
  await fastify.listen(3500);
  fastify.log.info(`Server listening on: ${fastify.server.address().port}`);
};

start();
