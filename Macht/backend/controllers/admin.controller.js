exports.adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@machtmit.com" && password === "admin123") {
    return res.json({ token: "admin-token" });
  }

  res.status(401).json({ message: "Invalid credentials" });
};
