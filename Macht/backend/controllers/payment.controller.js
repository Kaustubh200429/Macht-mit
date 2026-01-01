const Payment = require("../models/Payment");

exports.createPayment = async (req, res) => {
  const payment = await Payment.create(req.body);
  res.json(payment);
};

exports.getPayments = async (req, res) => {
  const payments = await Payment.find();
  res.json(payments);
};

exports.verifyPayment = async (req, res) => {
  await Payment.findByIdAndUpdate(req.params.id, { status: "Verified" });
  res.json({ success: true });
};
