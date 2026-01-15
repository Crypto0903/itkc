import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const BASE_URL = "http://localhost:5000/api/auth";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    aadhaar: "",
    password: "",
    confirmPassword: ""
  });

  const [progress, setProgress] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // OTP states
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  /* Progress bar */
  useEffect(() => {
    let filled = 0;
    Object.values(formData).forEach(value => {
      if (value.trim() !== "") filled++;
    });
    setProgress((filled / 7) * 100);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* STEP 1: SEND OTP */
  const handleRegister = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!formData.email) {
      alert("Email is required");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${BASE_URL}/send-otp`, {
        email: formData.email
      });

      alert("OTP sent to your email");
      setShowOTPModal(true);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  /* STEP 2: VERIFY OTP + REGISTER */
  const verifyOTPAndRegister = async () => {
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${BASE_URL}/verify-otp-register`, {
        email: formData.email,
        password: formData.password,
        role_id: 2, // STUDENT
        otp: otp
      });

      alert("Registration successful");
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .register-page {
          min-height: 100vh;
          background-image: url('/loginback.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
        }

        .register-page::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.55);
          z-index: 0;
        }

        .register-card {
          max-width: 540px;
          width: 100%;
          background: #fff;
          border-radius: 16px;
          padding: 34px;
          box-shadow: 0 14px 35px rgba(0,0,0,0.15);
          position: relative;
          z-index: 1;
        }

        .progress {
          height: 8px;
          border-radius: 10px;
          background-color: #e3f2fd;
          margin-bottom: 24px;
        }

        .progress-bar {
          background: linear-gradient(90deg, #0288d1, #4fc3f7);
        }

        .eye-btn {
          cursor: pointer;
          background: #f5f7fa;
          border-left: 0;
          color: #0288d1;
        }

        .otp-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
      `}</style>

      <div className="register-page">
        <div className="register-card">
          <h4 className="text-center fw-bold text-primary">
            ITKC Student Registration
          </h4>
          <p className="text-center text-muted">IT Knowledge Centre</p>

          <div className="progress">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>

          {/* Name */}
          <div className="row mb-3">
            <div className="col">
              <input className="form-control" placeholder="First Name" name="firstName" onChange={handleChange} />
            </div>
            <div className="col">
              <input className="form-control" placeholder="Last Name" name="lastName" onChange={handleChange} />
            </div>
          </div>

          {/* Email */}
          <input className="form-control mb-3" placeholder="Email Address" name="email" onChange={handleChange} />

          {/* Mobile */}
          <input className="form-control mb-3" placeholder="+91 Mobile Number" name="mobile" onChange={handleChange} />

          {/* Aadhaar */}
          <input className="form-control mb-3" placeholder="Aadhaar Number" name="aadhaar" onChange={handleChange} />

          {/* Password */}
          <div className="input-group mb-3">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <span className="input-group-text eye-btn" onClick={() => setShowPassword(!showPassword)}>
              <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} />
            </span>
          </div>

          {/* Confirm Password */}
          <div className="input-group mb-4">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="form-control"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
            />
            <span className="input-group-text eye-btn" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              <i className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"}`} />
            </span>
          </div>

          <button className="btn btn-primary w-100" onClick={handleRegister} disabled={loading}>
            {loading ? "Sending OTP..." : "Continue →"}
          </button>
        </div>
      </div>

      {/* OTP MODAL */}
      {showOTPModal && (
        <div className="otp-backdrop">
          <div className="bg-white p-4 rounded" style={{ width: "350px" }}>
            <h5 className="text-center mb-3">Email Verification</h5>
            <input
              className="form-control mb-3"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="btn btn-success w-100" onClick={verifyOTPAndRegister} disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
