const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  registerUser,
  loginUser,
  logoutUser,
  assignCourse,
  deleteUser,
  approveUser,
  rejectUser
} = require("../controllers/userController");

const { protect, admin } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.put("/assigncourse", protect, admin, assignCourse);
router.delete("/:id", protect, admin, deleteUser);

router.put("/approve/:id", protect, admin, approveUser);
router.put("/reject/:id", protect, admin, rejectUser);

router.get("/", protect, admin, getAllUsers);

module.exports = router;
