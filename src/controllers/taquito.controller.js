const boom = require("boom");

const Taquito = require("../models/taquito.model");

const getTaquitos = async (req, reply) => {
  try {
    const taquitos = await Taquito.find();

    reply.code(200).send({
      msg: "taquitos listed",
      data: taquitos,
    });
  } catch (error) {
    throw boom.boomify(error);
  }
};

const getTaquitoById = async (req, reply) => {
  try {
    const taquito = await Taquito.findOne({ _id: req.params.taquitoId });
    reply.code(200).send({ msg: "taquito listed", data: taquito });
  } catch (error) {
    throw boom.boomify(error);
  }
};

const createTaquito = async (req, reply) => {
  try {
    const taquito = new Taquito(req.body);
    await taquito.save();

    reply
      .code(201)
      .send({ msg: "taquito created successfully", data: taquito });
  } catch (error) {
    throw boom.boomify(error);
  }
};

const updateTaquito = async (req, reply) => {
  try {
    const taquitoId = req.params.taquitoId;
    const taquito = await Taquito.findByIdAndUpdate(taquitoId, req.body, {
      new: true,
      runValidators: true,
    });
    reply
      .code(200)
      .send({ msg: "taquito updated successfully", data: taquito });
  } catch (error) {
    throw boom.boomify(error);
  }
};

const deleteTaquito = async (req, reply) => {
  try {
    const taquitoId = req.params.taquitoId;
    const taquito = await Taquito.findByIdAndDelete(taquitoId);
    reply.code(204).send({
      msg: "taquito deleted successfully",
      data: taquito,
    });
  } catch (error) {
    throw boom.boomify(error);
  }
};

module.exports = {
  getTaquitos,
  getTaquitoById,
  createTaquito,
  updateTaquito,
  deleteTaquito,
};
