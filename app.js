var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bot = require("./bot/bots");
const passport = require("passport");
const session = require("express-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var dataRouter = require("./routes/data");
var cors = require("cors");

var app = express();
app.use(
  session({
    secret: "Keep it secret",
    name: "uniqueSessionID",
    // resave: true,
    saveUninitialized: false,
  })
);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/src")));
app.use(express.static('js'));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/data", dataRouter);
app.use("/", bot.webhookCallback);

module.exports = app;
