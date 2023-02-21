const router = require("express").Router();
const { Transaction_Info, Block_Info } = require("../models/index");

router.post("/getLatelyTransaction", async (req, res) => {
  const data = await Transaction_Info.findAll({
    order: [["id", "DESC"]],
    limit: 6,
    include: [{ model: Block_Info }],
  });
  res.send({ data });
});

module.exports = router;
