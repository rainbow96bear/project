const router = require("express").Router();
const { Block_Info } = require("../models/index");

router.post("/getLatelyBlock", async (req, res) => {
  const data = await Block_Info.findAll({
    order: [["id", "DESC"]],
    limit: 6,
  });
  res.send({ data });
});

module.exports = router;
