const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendOTP = async (email, otp) => {
  await transporter.sendMail({
    from: `"ITKC Portal" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your ITKC Registration OTP",
    html: `
      <h3>ITKC Email Verification</h3>
      <h2>${otp}</h2>
      <p>This OTP is valid for 5 minutes.</p>
    `
  });
};

module.exports = { sendOTP };
