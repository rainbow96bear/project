const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const userInfo = jwt.verify(
    req.cookies.accessCookie,
    process.env.ACCESSTOKEN_SECRET
  );
  console.log(userInfo);
  res.send({ info: userInfo });
});

module.exports = router;
