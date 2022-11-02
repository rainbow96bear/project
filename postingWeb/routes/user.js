const router = require("express").Router();
const fs = require("fs");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const { UserInfo } = require("../models/index.js");

let userInfo = [];
let idpw = {};
router.post("/signup", async (req, res) => {
  try {
    if (await UserInfo.findOne({ where: { userId: req.body.id } })) {
      res.send({ status: 400 });
    } else {
      await UserInfo.create({
        name: req.body.name,
        birth: req.body.birth,
        userId: req.body.id,
        pw: crypto.SHA256(req.body.pw).toString(),
      });
      res.send({ status: 200 });
    }
  } catch (err) {}
});
router.post("/login", async (req, res) => {
  const tempUserInfo = await UserInfo.findOne({
    where: { userId: req.body.id },
  });
  if (tempUserInfo) {
    if (tempUserInfo.pw == crypto.SHA256(req.body.pw).toString()) {
      const accessToken = jwt.sign(
        { id: req.body.id, pw: idpw[req.body.id] },
        process.env.ACCESSTOKEN_SECRET,
        {
          algorithm: "HS256",
          expiresIn: "30m",
          issuer: "rainbowbear",
        }
      );
      res.cookie("accessCookie", accessToken, {
        expires: new Date(Date.now() + 30 * 60 * 1000),
      });
      res.send({ status: 200, id: req.body.id });
    } else {
      res.send({ status: 400 });
    }
  } else {
    res.send({ status: 401 });
  }
});
router.post("/checkToken", (req, res) => {
  if (req.cookies["accessCookie"]) {
    const tempObj = jwt.verify(
      req.cookies["accessCookie"],
      process.env.ACCESSTOKEN_SECRET
    );
    if (UserInfo.findOne({ where: { userId: tempObj.id } }).pw == tempObj.pw) {
      res.send({ status: 200, id: tempObj.id });
    }
  } else {
    res.send({ data: 400 });
  }
});
module.exports = router;
