const Sequelize = require("sequelize");

module.exports = class Transaction_Info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        transactionHash: {
          type: Sequelize.STRING(255),
        },
        from: {
          type: Sequelize.STRING(255),
        },
        gas: {
          type: Sequelize.STRING(255),
        },
        gasPrice: {
          type: Sequelize.STRING(255),
        },
        to: {
          type: Sequelize.STRING(255),
        },
        value: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "Transaction_Info",
        tableName: "Transaction_Info",
        timestamps: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Transaction_Info.belongsTo(db.Block_Info, {
      sourceKey: "blockHeight",
      foreignKey: "blockNumber",
      onDelete: "cascade",
    });
  }
};
