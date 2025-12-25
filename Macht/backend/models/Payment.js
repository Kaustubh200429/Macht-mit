const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  planName: String,
  amount: Number,
  status: {
    type: String,
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Payment", paymentSchema);
