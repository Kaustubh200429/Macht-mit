const Payment = require("../models/Payment");

// GET ALL PAYMENTS
exports.getPayments = async (req, res) => {
  const payments = await Payment.find().sort({ createdAt: -1 });
  res.json(payments);
};

// CREATE PAYMENT (from frontend)
exports.createPayment = async (req, res) => {
  const { planName, amount } = req.body;

  const payment = await Payment.create({
    planName,
    amount,
  });

  res.status(201).json(payment);
};

// VERIFY PAYMENT (admin)
exports.verifyPayment = async (req, res) => {
  const payment = await Payment.findByIdAndUpdate(
    req.params.id,
    { status: "Verified" },
    { new: true }
  );

  res.json(payment);
};
