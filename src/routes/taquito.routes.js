const controllers = require("../controllers/taquito.controller");

const routes = [
  {
    url: "/",
    method: "GET",
    handler: controllers.getTaquitos,
    schema: {
      description: "Get all taquitos",
      tags: ["Taquitos"],
      response: {
        200: {
          description: "Taquitos successfully listed",
          type: "object",
          properties: {
            msg: { type: "string" },
            data: {
              type: "array",
              description: "Listed all taquitos",
            },
          },
        },
      },
    },
  },
  {
    url: "/:taquitoId",
    method: "GET",
    handler: controllers.getTaquitoById,
    schema: {
      description: "Get a single taquito",
      tags: ["Taquitos"],
      params: {
        type: "object",
        properties: {
          taquitoId: {
            type: "string",
            description: "Taquito ID",
          },
        },
      },
      response: {
        200: {
          description: "Taquito successfully listed",
          type: "object",
          properties: {
            msg: { type: "string" },
            data: { type: "object", description: "taquito" },
          },
        },
      },
    },
  },
  {
    url: "/",
    method: "POST",
    handler: controllers.createTaquito,
    schema: {
      description: "Create one taquito",
      tags: ["Taquitos"],
      body: {
        type: "object",
        required: ["title", "description"],
        properties: {
          title: {
            type: "string",
            description: "title of taquito",
          },
          description: { type: "string", description: "title of taquito" },
          image: { type: "string", description: "url image of taquito" },
          rate: { type: "integer", default: 5, description: "rate of taquito" },
        },
      },
      response: {
        201: {
          description: "Taquito successfully created",
          type: "object",
          properties: {
            msg: { type: "string" },
            data: {
              type: "object",
              description: "Taquito created with _id, createAt & updated field",
            },
          },
        },
      },
    },
  },
  {
    url: "/:taquitoId",
    method: "PUT",
    handler: controllers.updateTaquito,
    schema: {
      description: "Update one Taquito",
      tags: ["Taquitos"],
      querystring: {
        type: "object",
        required: ["taquitoId"],
        additionalProperties: false,
        properties: {
          taquitoId: {
            type: "string",
            taquitoId: {
              type: "string",
            },
          },
        },
      },
      body: {
        description: "Update one Taquito",
        type: "object",
        required: ["title", "description"],
        properties: {
          title: {
            type: "string",
            description: "title of taquito",
          },
          description: { type: "string", description: "title of taquito" },
          image: { type: "string", description: "url image of taquito" },
          rate: { type: "integer", default: 5, description: "rate of taquito" },
        },
      },
      response: {
        200: {
          description: "Taquito successfully updated",
          type: "object",
          properties: {
            msg: { type: "string" },
            data: {
              type: "object",
              description: "Return updated taquito",
            },
          },
        },
      },
    },
  },
  {
    url: "/:taquitoId",
    method: "DELETE",
    handler: controllers.deleteTaquito,
    schema: {
      description: "Delete one Taquito",
      tags: ["Taquitos"],
      querystring: {
        type: "object",
        required: ["taquitoId"],
        additionalProperties: false,
        properties: {
          taquitoId: {
            type: "string",
            taquitoId: {
              type: "string",
            },
          },
        },
      },
      response: {
        200: {
          description: "Taquito successfully deleted",
          properties:{}
        },
      },
    },
  },
];

module.exports = routes;
