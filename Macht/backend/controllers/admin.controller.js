exports.adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@machtmit.com" && password === "admin123") {
    return res.json({
      success: true,
      token: "dummy-admin-token",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid admin credentials",
  });
};
