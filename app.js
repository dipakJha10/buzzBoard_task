const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const api = require("./api/orders");
const db = require("./db/db");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send({
    status: "ON",
    message: "Api service is running!!",
  });
});

app.use("/api/", api);

app.listen(process.env.PORT || 5000, () => {
  console.log("server is up at 5000");
});
