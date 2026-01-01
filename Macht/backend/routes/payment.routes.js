const router = require("express").Router();
const {
  createPayment,
  getPayments,
  verifyPayment
} = require("../controllers/payment.controller");

router.post("/", createPayment);
router.get("/", getPayments);
router.put("/:id/verify", verifyPayment);

module.exports = router;
