const router = require("express").Router();
const blockInfo = require("./blockInfo");
const transactionInfo = require("./transactionInfo");
const search = require("./search");
const { Transaction_Info, Block_Info } = require("../models/index");

const { Op } = require("sequelize");

router.use("/blockInfo", blockInfo);
router.use("/transactionInfo", transactionInfo);
router.use("/search", search);

router.post("/getInfo", async (req, res) => {
  if (req.body.type == "block") {
    const data = await Block_Info.findOne({
      where: {
        [Op.or]: [
          {
            blockHeight: req.body.value,
          },
          {
            hash: req.body.value,
          },
        ],
      },
    });
    res.send({ data });
  } else if (req.body.type == "tx") {
    const data = await Transaction_Info.findOne({
      where: {
        [Op.or]: [
          { transactionHash: req.body.value },
          { blockNumber: req.body.value },
        ],
      },
      include: [{ model: Block_Info }],
    });
    res.send({ data });
  } else if (req.body.type == "address") {
    const data = await Transaction_Info.findAll({
      order: [["id", "DESC"]],
      where: {
        [Op.or]: [{ from: req.body.value }, { to: req.body.value }],
      },
      include: [{ model: Block_Info }],
      limit: 25,
    });
    res.send({ data });
  }
});

router.post("/getAllInfo", async (req, res) => {
  if (req.body.type == "blocks") {
    const data = await Block_Info.findAll({
      order: [["id", "DESC"]],
      limit: req.body.showRow,
      offset: (req.body.page - 1) * req.body.showRow,
    });
    const dataLength = (
      await Block_Info.findOne({
        order: [["id", "DESC"]],
      })
    ).id;
    res.send({ data, dataLength });
  } else if (req.body.type == "txs") {
    const data = await Transaction_Info.findAll({
      order: [["id", "DESC"]],
      include: [{ model: Block_Info }],
      limit: req.body.showRow,
      offset: (req.body.page - 1) * req.body.showRow,
    });
    const dataLength = (
      await Transaction_Info.findOne({
        order: [["id", "DESC"]],
      })
    ).id;
    res.send({ data, dataLength });
  }
});
module.exports = router;
