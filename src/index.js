const fastify = require("fastify")({
  logger: true,
});

const fastifyEnv = require("fastify-env");

const schema = {
  type: "object",
  required: ["PORT", "DB_MONGO_URI"],
  properties: {
    PORT: {
      type: "string",
    },
    DB_MONGO_URI: {
      type: "string",
    },
  },
};

// const options = {
//   confKey: "config",
//   schema,
//   dotenv: true,
//   data: process.env,
// };

// const initialize = async () => {
//   fastify.register(fastifyEnv, options);
//   await fastify.after();

//   // Database
//   // Connection URL
//   const username = encodeURIComponent(fastify.config.DB_USERNAME);
//   const password = encodeURIComponent(fastify.config.DB_PASSWORD);
//   const dbName = "databaseName";

//   const url = `mongodb://${username}:${password}@localhost:27017/${dbName}`;

//   fastify.register(require("./database-connector"), {
//     url,
//     useUnifiedTopology: true,
//   });
// };

// initialize();

fastify.get("/", (req, res) => {
  res.send({ msg: "Hello World!" });
});
const initialize = async () => {
  fastify.register(fastifyEnv);
};
const start = async () => {
  try {
    await fastify.ready();
    await fastify.listen(3500);
    fastify.log.info(`Server listening on: ${fastify.server.address().port}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit();
  }
};

start();
