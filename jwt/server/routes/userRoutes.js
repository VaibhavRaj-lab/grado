const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authController = require("../controller/authController");
const User = require("../model/userSchema");
router.post("/login", userController.postLogin);
router.post("/signup", userController.postSignup);
router.post("/reset", userController.postReset);
router.post("/newpassword", userController.postNewPassword);
router.get(
  "/users",
  authController.authUser,
  authController.grantAccess("readOwn", "profile"),
  async (req, res) => {
    const user = await User.find({});
    if (user) {
      res.json({ user });
    } else {
      res.json({ info: "no user found" });
    }
  }
);
router.delete(
  "/delete",
  authController.authUser,
  authController.grantAccess("readOwn", "profile"),
  async (req, res) => {
    try {
      // const userId = req.params.userId;
      await User.findByIdAndDelete("6128e0f0eb9b3903e4387701");
      res.status(200).json({
        data: null,
        message: "User has been deleted",
      });
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
