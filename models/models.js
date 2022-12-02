const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order_Id: {
    type: String,
    required: true,
    unique: true,
  },
  item_name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  order_date: {
    type: String,
    required: true,
  },
  delivery_date: {
    type: String,
    required: true,
  },
});

const orders = mongoose.model("orders", orderSchema);

module.exports = { orders };
