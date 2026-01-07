import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    aadhaar: ""
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let filled = 0;
    Object.values(formData).forEach(value => {
      if (value.trim() !== "") filled++;
    });
    setProgress(filled * 20); // 5 fields, each 20%
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
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
        }

        /* Dark overlay */
        .register-page::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.55);
          z-index: 0;
        }

        .register-card {
          width: 100%;
          max-width: 540px;
          background: #ffffff;
          border-radius: 16px;
          padding: 34px;
          box-shadow: 0 14px 35px rgba(0,0,0,0.15);
          animation: fadeUp 0.6s ease-in-out;
          position: relative;
          z-index: 1;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .register-title {
          text-align: center;
          font-weight: 600;
          color: #0d47a1;
          margin-bottom: 6px;
        }

        .register-subtitle {
          text-align: center;
          font-size: 0.9rem;
          color: #607d8b;
          margin-bottom: 22px;
        }

        /* Progress */
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

        /* Inputs */
        .input-group-text {
          background: #f5f7fa;
          border-right: 0;
          border-radius: 8px 0 0 8px;
          color: #0288d1;
          transition: all 0.3s ease;
        }

        .input-group:hover .input-group-text {
          background: #e1f5fe;
          color: #01579b;
        }

        .form-control {
          height: 45px;
          border-left: 0;
          border-radius: 0 8px 8px 0;
          transition: all 0.3s ease;
        }

        .form-control:focus {
          border-color: #0288d1;
          box-shadow: 0 0 0 0.2rem rgba(2,136,209,0.25);
        }

        .name-input .form-control {
          border-radius: 8px;
          border-left: 1px solid #ced4da;
        }

        /* Button */
        .btn-register {
          width: 100%;
          height: 46px;
          border-radius: 8px;
          background: linear-gradient(135deg, #0288d1, #4fc3f7);
          border: none;
          font-weight: 500;
          letter-spacing: 0.4px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn-register:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(2,136,209,0.35);
        }
      `}</style>

      <div className="register-page">
        <div className="register-card">
          <h4 className="register-title">ITKC Student Registration</h4>
          <div className="register-subtitle">
            IT Knowledge Centre
          </div>

          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Name */}
          <div className="row mb-3">
            <div className="col name-input">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
              />
            </div>
            <div className="col name-input">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-envelope"></i>
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
            />
          </div>

          {/* Mobile */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-telephone"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="+91 Mobile Number"
              name="mobile"
              onChange={handleChange}
            />
          </div>

          {/* Aadhaar */}
          <div className="input-group mb-4">
            <span className="input-group-text">
              <i className="bi bi-fingerprint"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Aadhaar Number"
              name="aadhaar"
              onChange={handleChange}
            />
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
