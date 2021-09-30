require("dotenv").config();

const config = {
  port: process.env.PORT || 3600,
  dbMongoUri: process.env.DB_MONGO_URI_LOCAL,
};

module.exports = { config };
