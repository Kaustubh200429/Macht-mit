const Payment = require("../models/Payment");

exports.createPayment = async (req, res) => {
  const { planName, amount } = req.body;

  const payment = new Payment({ planName, amount });
  await payment.save();

  res.json({ message: "Payment saved", payment });
};

exports.getPayments = async (req, res) => {
  const payments = await Payment.find().sort({ createdAt: -1 });
  res.json(payments);
};

exports.verifyPayment = async (req, res) => {
  await Payment.findByIdAndUpdate(req.params.id, { status: "Verified" });
  res.json({ message: "Payment verified" });
};
