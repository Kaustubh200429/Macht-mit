// backend/controllers/admin.controller.js
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  // TEMP admin credentials (later move to MongoDB)
  if (email === "admin@machtmit.com" && password === "admin123") {
    return res.status(200).json({
      success: true,
      message: "Admin login successful",
      token: "dummy-admin-token"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid admin credentials"
  });
};
