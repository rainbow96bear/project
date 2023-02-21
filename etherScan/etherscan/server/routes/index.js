const router = require("express").Router();
const blockInfo = require("./blockInfo");
const transactionInfo = require("./transactionInfo");
const { Transaction_Info, Block_Info } = require("../models/index");
router.use("/blockInfo", blockInfo);
router.use("/transactionInfo", transactionInfo);

router.post("/getInfo", async (req, res) => {
  if (req.body.type == "block") {
    const data = await Block_Info.findOne({
      where: {
        blockHeight: req.body.value,
      },
    });
    res.send({ data });
  } else {
    const data = await Transaction_Info.findOne({
      where: {
        transactionHash: req.body.value,
      },
      include: [{ model: Block_Info }],
    });
    res.send({ data });
  }
});
module.exports = router;
