const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const adminRoutes = require("./routes/admin.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/api/admin", adminRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
