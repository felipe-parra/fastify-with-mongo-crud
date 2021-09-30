const mongoose = require("mongoose");
const { config } = require("../config");

mongoose.connect(
  String(config.dbMongoUri, {
    useUnifiedTopology: true,
  })
);

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Connection error: ", err);
});

db.once("open", (x) => {
  console.log("MongoDB connected: ", x);
});
