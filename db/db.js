const mongoose = require("mongoose");

var mongoDB =
  "mongodb+srv://deepak_jha:deepak_jha@cluster0.ivawf8l.mongodb.net/buzzBoardEcom?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function () {
  console.log("Connected to DB");
});

module.exports = db;
