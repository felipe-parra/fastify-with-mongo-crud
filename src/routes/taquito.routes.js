const controllers = require("../controllers/taquito.controller");

const routes = [
  {
    url: "/",
    method: "GET",
    handler: controllers.getTaquitos,
  },
  {
    url: "/:taquitoId",
    method: "GET",
    handler: controllers.getTaquitoById,
  },
  {
    url: "/",
    method: "POST",
    handler: controllers.createTaquito,
  },
  {
    url: "/:taquitoId",
    method: "PUT",
    handler: controllers.updateTaquito,
  },
  {
    url: "/:taquitoId",
    method: "DELETE",
    handler: controllers.deleteTaquito,
  },
];

module.exports = routes;
