"use strict";

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const UserInfo = require("./userInfo.js");
const Board = require("./board.js");

const db = { UserInfo, Board };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

UserInfo.init(sequelize);
Board.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
