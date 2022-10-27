const router = require("express").Router();
const fs = require("fs");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

let userInfo = [];
let idpw = {};
router.post("/login", (req, res) => {
  if (fs.existsSync(`idpw.json`)) {
    idpw = JSON.parse(fs.readFileSync(`idpw.json`, "utf-8"));
  } else {
    fs.writeFileSync(`./idpw.json`, "", () => {});
  }
  if (idpw[req.body.id]) {
    if (idpw[req.body.id] == crypto.SHA256(req.body.pw).toString()) {
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
router.post("/signup", (req, res) => {
  if (fs.existsSync(`userInfo.json`)) {
    userInfo = JSON.parse(fs.readFileSync(`userInfo.json`, "utf-8"));
  } else {
    fs.writeFileSync(`./userInfo.json`, "", () => {});
  }
  if (fs.existsSync(`idpw.json`)) {
    idpw = JSON.parse(fs.readFileSync(`idpw.json`, "utf-8"));
  } else {
    fs.writeFileSync(`./idpw.json`, "", () => {});
  }
  try {
    if (!idpw[req.body.id]) {
      idpw[req.body.id] = crypto.SHA256(req.body.pw).toString();
      userInfo.push({
        name: req.body.name,
        birth: req.body.birth,
        id: req.body.id,
        pw: crypto.SHA256(req.body.pw).toString(),
      });
      fs.writeFileSync("./userInfo.json", JSON.stringify(userInfo), () => {
        console.log("아이디 비밀번호 저장완료");
      });
      fs.writeFileSync("./idpw.json", JSON.stringify(idpw), () => {
        console.log("아이디 비밀번호 저장완료");
      });
      res.send({ status: 200 });
    } else {
      res.send({ status: 400 });
    }
  } catch (err) {
    // console.log(err);
  }
});
router.post("/checkToken", (req, res) => {
  if (req.cookies["accessCookie"]) {
    const tempObj = jwt.verify(
      req.cookies["accessCookie"],
      process.env.ACCESSTOKEN_SECRET
    );
    if (idpw[tempObj.id] == tempObj.pw) {
      res.send({ status: 200, id: tempObj.id });
    }
  } else {
    res.send({ data: 400 });
  }
});
module.exports = router;
