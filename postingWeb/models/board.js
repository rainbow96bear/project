const Sequelize = require("sequelize");

module.exports = class Board extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(255),
        },
        content: {
          type: Sequelize.STRING(255),
        },
        uploader: {
          type: Sequelize.STRING(255),
        },
        uptime: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "Board",
        tableName: "board",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
};
