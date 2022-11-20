const router = require("express").Router();
const jwt = require("jsonwebtoken");
let postArr = [];
const { Board } = require("../models/index.js");

router.post("/addPost", async (req, res) => {
  const time = new Date();
  if (req.cookies["accessCookie"]) {
    await Board.create({
      title: req.body.title,
      content: req.body.content,
      uploader: jwt.verify(
        req.cookies["accessCookie"],
        process.env.ACCESSTOKEN_SECRET
      ).id,
      uptime: `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`,
    });
    res.send({ status: 200 });
  } else {
    res.send({ status: 400 });
  }
});
router.post("/getPost", async (req, res) => {
  const postArr = await Board.findAll();
  console.log(postArr);
  res.send({ data: postArr });
});

module.exports = router;
