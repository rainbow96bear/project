const Sequelize = require("sequelize");

module.exports = class Block_Info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        blockHeight: {
          type: Sequelize.STRING(255),
          unique: true,
        },
        timeStamp: {
          type: Sequelize.STRING(255),
        },
        feeRecipient: {
          type: Sequelize.STRING(255),
        },
        size: {
          type: Sequelize.STRING(255),
        },
        gasUsed: {
          type: Sequelize.STRING(255),
        },
        gasLimit: {
          type: Sequelize.STRING(255),
        },
        extraData: {
          type: Sequelize.STRING(255),
        },
        hash: {
          type: Sequelize.STRING(255),
          unique: true,
        },
        parentHash: {
          type: Sequelize.STRING(255),
        },
        stateRoot: {
          type: Sequelize.STRING(255),
        },
        nonce: {
          type: Sequelize.STRING(255),
        },
        transactionNumber: {
          type: Sequelize.STRING(255),
        },
        miner: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "Block_Info",
        tableName: "Block_Info",
        timestamps: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Block_Info.hasMany(db.Transaction_Info, {
      as: "BlockNumber",
      sourceKey: "blockHeight",
      foreignKey: "blockNumber",
    });
  }
};
