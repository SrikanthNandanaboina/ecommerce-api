const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = new express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./db");
const { userHandler } = require("./controllers/users");
const { userDetailsHandler } = require("./controllers/userDetails");
const { orderDetailsHandler } = require("./controllers/orderInfo");

const port = process.env.APP_PORT;
// const jwt = require("jsonwebtoken");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/register", userHandler);

app.get("/user", userDetailsHandler);

app.get("/order/:id", orderDetailsHandler);

sequelize.authenticate().then(function (result) {
  app.listen(port, function (err) {
    if (typeof err == "undefined") {
      console.log("Your application is running on : " + port + " port");
    } else {
      console.log("Your application is not running Try with another port!!!!");
    }
  });
});
