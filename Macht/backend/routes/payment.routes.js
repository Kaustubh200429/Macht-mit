const express = require("express");
const router = express.Router();
const {
  getPayments,
  createPayment,
  verifyPayment,
} = require("../controllers/payment.controller");

router.get("/", getPayments);
router.post("/", createPayment);
router.put("/:id/verify", verifyPayment);

module.exports = router;
