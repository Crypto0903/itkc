import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .login-card {
          width: 420px;
          padding: 2rem;
          border-radius: 16px;
          background-color: #ffffff;
          z-index: 1;
          position: relative;
          animation: fadeUp 0.6s ease-in-out;
        }

        .eye-btn {
          cursor: pointer;
          background: #f8f9fa;
          border-left: 0;
          color: #0d6efd;
        }
      `}</style>

      {/* BACKGROUND */}
      <div
        style={{
          position: "relative",
          backgroundImage: "url('/loginback.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
            zIndex: 0,
          }}
        />

        {/* LOGIN CARD */}
        <div className="shadow-lg login-card">
          <h2 className="text-center fw-bold mb-4 text-primary">Login</h2>

          <form>
            {/* EMAIL */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter password"
                  required
                />
                <span
                  className="input-group-text eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"
                      }`}
                  ></i>
                </span>
              </div>
            </div>

            {/* FORGOT PASSWORD */}
            <div className="mb-3 text-end">
              <Link to="/forgot-password" className="text-primary fw-semibold">
                Forgot Password?
              </Link>
            </div>

            {/* CAPTCHA */}
            <div className="d-flex justify-content-center mb-3">
              <ReCAPTCHA
                sitekey="6LcAbCdEfGhIjKlMnOpQrStUvWxYz"
                onChange={(value) => setCaptchaVerified(!!value)}
                onExpired={() => setCaptchaVerified(false)}
              />

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 mt-2"
              disabled={!captchaVerified}
            >
              Login
            </button>
          </form>

          {/* REGISTER */}
          <div className="text-center mt-3">
            <span className="text-muted">Don’t have an account?</span>{" "}
            <Link to="/register" className="fw-semibold text-primary">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
