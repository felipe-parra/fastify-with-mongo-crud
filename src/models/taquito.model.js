const { Schema, model } = require("mongoose");

const taquitoSchema = new Schema(
  {
    title: {
      type: String,
      maxlength: 128,
      minlength: 5,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      unique: true,
      required: true,
    },
    image: {
      type: String,
      unique: true,
    },
    rate: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Taquito", taquitoSchema);
