const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const adminRoutes = require("./routes/admin.routes");
const paymentRoutes = require("./routes/payment.routes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/admin", adminRoutes);
app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, () => console.log("Server running on 5000"));
