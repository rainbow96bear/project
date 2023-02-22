const router = require("express").Router();
const { Transaction_Info, Block_Info } = require("../models/index");

const { Op } = require("sequelize");

router.post("/byKeyword", async (req, res) => {
  keyWord = req.body.keyWord.replace(/ /g, "");
  const blockData = await Block_Info.findOne({
    where: {
      [Op.or]: [
        {
          blockHeight: +keyWord,
        },
        {
          hash: keyWord,
        },
      ],
    },
    attributes: ["blockHeight"],
  });
  const txData = await Transaction_Info.findOne({
    where: {
      transactionHash: keyWord,
    },
    attributes: ["transactionHash"],
  });

  if (blockData != null) {
    res.send({
      where: "block",
      value: blockData.blockHeight,
    });
  } else if (txData != null) {
    res.send({
      where: "tx",
      value: txData.transactionHash,
    });
  } else {
    res.send({ where: "404" });
  }
});

module.exports = router;
