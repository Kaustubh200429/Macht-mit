const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  planName: String,
  amount: Number,
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Payment", paymentSchema);
