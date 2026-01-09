import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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

  useEffect(() => {
    let filled = 0;
    Object.values(formData).forEach(value => {
      if (value.trim() !== "") filled++;
    });
    setProgress((filled / 7) * 100); // 7 fields
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          animation: fadeUp 0.6s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .register-title {
          text-align: center;
          font-weight: 600;
          color: #0d47a1;
        }

        .register-subtitle {
          text-align: center;
          font-size: 0.9rem;
          color: #607d8b;
          margin-bottom: 20px;
        }

        .progress {
          height: 8px;
          border-radius: 10px;
          background-color: #e3f2fd;
          margin-bottom: 24px;
        }

        .progress-bar {
          background: linear-gradient(90deg, #0288d1, #4fc3f7);
          transition: width 0.4s ease;
        }

        .input-group-text {
          background: #f5f7fa;
          border-right: 0;
          color: #0288d1;
        }

        .form-control {
          height: 45px;
          border-left: 0;
        }

        .form-control:focus {
          box-shadow: 0 0 0 0.2rem rgba(2,136,209,0.25);
        }

        .eye-btn {
          cursor: pointer;
          background: #f5f7fa;
          border-left: 0;
          color: #0288d1;
        }

        .btn-register {
          width: 100%;
          height: 46px;
          border-radius: 8px;
          background: linear-gradient(135deg, #0288d1, #4fc3f7);
          border: none;
          font-weight: 500;
        }

        .btn-register:hover {
          box-shadow: 0 8px 20px rgba(2,136,209,0.35);
        }
      `}</style>

      <div className="register-page">
        <div className="register-card">
          <h4 className="register-title">ITKC Student Registration</h4>
          <div className="register-subtitle">IT Knowledge Centre</div>

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
          <div className="input-group mb-3">
            <span className="input-group-text"><i className="bi bi-envelope" /></span>
            <input className="form-control" placeholder="Email Address" name="email" onChange={handleChange} />
          </div>

          {/* Mobile */}
          <div className="input-group mb-3">
            <span className="input-group-text"><i className="bi bi-telephone" /></span>
            <input className="form-control" placeholder="+91 Mobile Number" name="mobile" onChange={handleChange} />
          </div>

          {/* Aadhaar */}
          <div className="input-group mb-3">
            <span className="input-group-text"><i className="bi bi-fingerprint" /></span>
            <input className="form-control" placeholder="Aadhaar Number" name="aadhaar" onChange={handleChange} />
          </div>

          {/* Password */}
          <div className="input-group mb-3">
            <span className="input-group-text"><i className="bi bi-lock" /></span>
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
            <span className="input-group-text"><i className="bi bi-shield-lock" /></span>
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

          <button className="btn btn-primary btn-register">
            Continue →
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
