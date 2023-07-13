const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let publisher_inventorys = new Schema({
    "id": "String",
    "name": "String",
    "quantity":"Number",
    "publisher_id":"String",
    "publisher_name":"String",
    "author":"String",
    "year":"Number",
    "price":"Number"
  });

module.exports = mongoose.model("publisher_inventorys", publisher_inventorys);