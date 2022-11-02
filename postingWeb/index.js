const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const routes = require("./routes/index.js");
const signup = require("./routes/user.js");
const writepost = require("./routes/board.js");
const cheating = require("./routes/cheat.js");
const socket = require("./web/cheating/socket.js");
const { sequelize } = require("./models/index.js");

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);

app.use("/", express.static(path.join(__dirname, "web")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use((req, res, next) => {
  if (process.env.NODE_ENV == "production") {
    morgan("combined")(req, res, next);
  } else {
    morgan("dev")(req, res, next);
  }
});
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
app.use("/api", routes);
app.use("/signup", signup);
app.use("/writepost", writepost);
app.use("/cheating", cheating);
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

const server = app.listen(app.get("port"), () => {
  console.log("포스팅서버오픈");
});
socket(server);
