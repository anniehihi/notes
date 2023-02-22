const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const homeRoute = require("./src/routes/index");
const dashboardRoute = require("./src/routes/dashboardRoute");
const authRoute = require("./src/routes/authRoutes");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");

// Session

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.DB.replace("<password>", process.env.DB_PASSWORD),
    }),
    cookie: { maxAge: new Date(Date.now() + 3600000) },
    // Date.now() - 30 * 24 * 60 * 60 * 1000
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);
app.use(methodOverride("_method"));
// Template engine
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Routes
app.use("/", homeRoute);
app.use("/", dashboardRoute);
app.use("/", authRoute);
app.get("*", function (req, res) {
  res.status(400).render("404");
});

module.exports = app;
