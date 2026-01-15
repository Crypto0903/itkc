const express = require("express");
const router = express.Router();
const authController = require("../controllers/authControl");

router.post("/send-otp", authController.sendRegisterOTP);
router.post("/verify-otp-register", authController.verifyOTPAndRegister);

module.exports = router;
