"use strict";

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const Block_Info = require("./blockInfo");
const Transaction_Info = require("./transactionInfo");

const db = { Block_Info, Transaction_Info };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Block_Info.init(sequelize);
Transaction_Info.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
