exports.options = {
  routePrefix: "/documentation",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Taquitos API",
      description:
        "Building a blazing fast REST API with Node.js, Fastify and MongoDB",
      version: "0.0.1",
    },
    externalDocs: "https://github.com/felipe-parra/fastify-with-mongo-crud",
    description: "Find more info here",
  },
  host: "localhost:3500",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};
