const router = require("express").Router();
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

const fs = require("fs");
function makeDB(fileName) {
  if (!fs.existsSync(`./${fileName}.json`)) {
    fs.writeFile(`./${fileName}.json`, "", () => {});
  }
}
function loadLoginDB(fileName) {
  if (fs.existsSync(`${fileName}.json`)) {
    login = JSON.parse(fs.readFileSync(`${fileName}.json`, "utf-8"));
  }
}
function loadUserInfoDB(fileName) {
  if (fs.existsSync(`${fileName}.json`)) {
    userInfo = JSON.parse(fs.readFileSync(`${fileName}.json`, "utf-8"));
  }
}

let userInfo = {};
let login = {};

router.post("/login", (req, res) => {
  loadLoginDB("login");
  loadUserInfoDB("userInfo");
  if (login[req.body.id]) {
    if (login[req.body.id] == crypto.SHA256(req.body.pw).toString()) {
      const accessToken = jwt.sign({ id: req.body.id }, "rainbowbear", {
        algorithm: "HS256",
        issuer: "rainbowbear",
      });
      const refreshToken = jwt.sign({ id: req.body.id }, "rainbowbear", {
        algorithm: "HS256",
        issuer: "rainbowbear",
      });
      res.cookie("accessCookie", accessToken, {
        expires: new Date(Date.now() + 60 * 1000),
      });

      res.cookie("refreshCookie", refreshToken, {
        expires: new Date(Date.now() + 10 * 60 * 1000),
      });
      res.send({ status: 200 });
    } else {
      res.send({ status: 400 });
    }
  } else {
    res.send({ status: 401 });
  }
});

router.post("/checkEmail", (req, res) => {
  if (!userInfo[req.body.email]) {
    res.send({ status: 200 });
  } else {
    res.send({ status: 400 });
  }
});

router.post("/checkId", (req, res) => {
  if (!login[req.body.id]) {
    res.send({ status: 200 });
  } else {
    res.send({ status: 400 });
  }
});

router.post("/signUp", (req, res) => {
  makeDB("login");
  makeDB("userInfo");
  loadLoginDB("login");
  loadUserInfoDB("userInfo");
  login[req.body.id] = crypto.SHA256(req.body.pw).toString();
  userInfo[req.body.email] = {
    name: req.body.name,
    id: req.body.id,
    pw: crypto.SHA256(req.body.pw).toString(),
  };
  fs.writeFile("./login.json", JSON.stringify(login), () => {});
  fs.writeFile("./userInfo.json", JSON.stringify(userInfo), () => {});

  res.send({ status: 200 });
});

router.post("/test", (req, res) => {
  const token = req.cookies.accessCookie;
  console.log(token);
  const data = jwt.verify(token, "rainbowbear").id;
  console.log(data);
  res.send({ id: data });
});

module.exports = router;
