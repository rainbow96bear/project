const router = require("express").Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
let postArr = [];

router.post("/addPost", async (req, res) => {
  const time = new Date();
  if (req.cookies["accessCookie"]) {
    postArr.push({
      title: req.body.title,
      content: req.body.content,
      id: jwt.verify(
        req.cookies["accessCookie"],
        process.env.ACCESSTOKEN_SECRET
      ).id,
      uptime: `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`,
      comment: [],
    });
    fs.writeFileSync("./postArr.json", JSON.stringify(postArr), () => {});
    res.send({ status: 200 });
  } else {
    res.send({ status: 400 });
  }
});
router.post("/getPost", async (req, res) => {
  if (fs.existsSync(`postArr.json`)) {
    postArr = await JSON.parse(fs.readFileSync(`postArr.json`, "utf-8"));
  } else {
    fs.writeFileSync(`./postArr.json`, "", () => {});
  }
  res.send({ data: postArr });
});

module.exports = router;
