const db = require("../config/db");
const bcrypt = require("bcrypt");
const { sendOTP } = require("../utils/emailServices");

// SEND OTP
exports.sendRegisterOTP = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email required" });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  try {
    await db.promise().query(
      "DELETE FROM email_otp WHERE email = ?",
      [email]
    );

    await db.promise().query(
      "INSERT INTO email_otp (email, otp_code, expires_at) VALUES (?, ?, ?)",
      [email, otp, expiresAt]
    );

    await sendOTP(email, otp);
    res.json({ message: "OTP sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "OTP failed" });
  }
};

// VERIFY OTP + REGISTER
exports.verifyOTPAndRegister = async (req, res) => {
  const { email, password, role_id, otp } = req.body;

  try {
    const [rows] = await db.promise().query(
      "SELECT * FROM email_otp WHERE email=? AND otp_code=? AND is_verified=0 AND expires_at>NOW()",
      [email, otp]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    const hash = await bcrypt.hash(password, 10);

    await db.promise().query(
      "INSERT INTO users (username, password_hash, role_id) VALUES (?, ?, ?)",
      [email, hash, role_id]
    );

    await db.promise().query(
      "UPDATE email_otp SET is_verified=1 WHERE email=?",
      [email]
    );

    res.json({ message: "Registration successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration failed" });
  }
};
