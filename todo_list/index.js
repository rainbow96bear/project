const express = require("express");
const session = require("express-session");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const routes = require("./routes/index.js");
dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);
app.use("/", express.static(path.join(__dirname, "login")));
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
    cookie: {
      httpOnly: true,
      secure: false,
    },
    secret: process.env.COOKIE_SECRET,
    name: "session",
  })
);
app.use("/api", routes);
app.use("/signup", routes);
app.listen(app.get("port"), () => {
  console.log("서버 열음");
});
