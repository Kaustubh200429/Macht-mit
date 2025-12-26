const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const adminRoutes = require("./routes/admin.routes");
const paymentRoutes = require("./routes/payment.routes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/api/admin", adminRoutes);
app.use("/api/payments", paymentRoutes); // ✅ IMPORTANT

app.listen(5000, () => {
  console.log("Server running on 5000");
});
