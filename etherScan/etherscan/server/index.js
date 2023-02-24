const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const web3 = require("./web3");
const blockInfo = require("./models/blockInfo");
const transactionInfo = require("./models/transactionInfo");
const Web3 = require("web3");
const db = require("./models/index");
const { sequelize } = require("./models/index");
let metamask;
const routes = require("./routes/index.js");

const app = express();

dotenv.config();

app.set("port", process.env.PORT);

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use(cors({ origin: "http://192.168.0.223:3000", credentials: true }));
app.use("/", express.static(path.join(__dirname, "build")));
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session",
  })
);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.post("/sync", async (req, res) => {
  const lastBlockNumber = await web3.eth.getBlockNumber();
  const lastDBBlockNumber = (await blockInfo.findAll()).length;
  if (lastBlockNumber > lastDBBlockNumber - 1) {
    for (let i = lastDBBlockNumber; i <= lastBlockNumber; i++) {
      await web3.eth.getBlock(i, true, async (err, block) => {
        const blockDB = await blockInfo.create({
          blockHeight: block.number,
          timeStamp: block.timestamp,
          feeRecipient: block.miner,
          size: block.size,
          gasUsed: block.gasUsed,
          gasLimit: block.gasLimit,
          extraData: block.extraData,
          hash: block.hash,
          parentHash: block.parentHash,
          stateRoot: block.stateRoot,
          nonce: block.nonce,
          transactionNumber: block.transactions.length,
          miner: block.miner,
        });
        block.transactions.forEach(async (txInfo) => {
          const transaction = await transactionInfo.create({
            transactionHash: txInfo.hash,
            from: txInfo.from,
            gas: txInfo.gas,
            gasPrice: txInfo.gasPrice,
            to: txInfo.to,
            value: txInfo.value,
          });
          blockDB.addBlockNumber(transaction);
        });
      });
    }
  }

  res.send({ data: "동기화 완료" });
});
app.use("/api", routes);

app.listen(app.get("port"), () => {
  console.log(app.get("port") + "번 포트에 서버 오픈");
});
