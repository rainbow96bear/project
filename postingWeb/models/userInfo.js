const Sequelize = require("sequelize");

module.exports = class UserInfo extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(10),
        },
        birth: {
          type: Sequelize.STRING(10),
        },
        userId: {
          type: Sequelize.STRING(255),
        },
        pw: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "UserInfo",
        tableName: "userInfo",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
};
