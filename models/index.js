const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.HOST;
db.userinfo = require("./userinfo.models.js")(mongoose);

module.exports = db;