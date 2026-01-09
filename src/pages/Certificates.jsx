import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCertificate, FaFilePdf } from "react-icons/fa";

export default function Certificates() {
  const navigate = useNavigate();

  // 🔐 SIMULATED LOGIN STATE
  const isLoggedIn = false;

  // 🔔 POPUP CONTROL
  const [showPopup, setShowPopup] = useState(!isLoggedIn);

  const certificatesData = [
    {
      title: "Diploma in ICT Skills and Office Management",
      issuedBy: "IT Knowledge Centre (ITKC)",
      issueDate: "January 2026",
      certificateId: "ITKC/ICT/2026/001",
      status: "Digitally Signed",
    },
    {
      title: "Certification in Web Development",
      issuedBy: "IT Knowledge Centre (ITKC)",
      issueDate: "February 2026",
      certificateId: "ITKC/WEB/2026/014",
      status: "Digitally Signed",
    },
    {
      title: "Certification in Data Analytics",
      issuedBy: "IT Knowledge Centre (ITKC)",
      issueDate: "March 2026",
      certificateId: "ITKC/DATA/2026/022",
      status: "Digitally Signed",
    },
    {
      title: "Certification in Machine Learning",
      issuedBy: "IT Knowledge Centre (ITKC)",
      issueDate: "April 2026",
      certificateId: "ITKC/ML/2026/031",
      status: "Digitally Signed",
    },
  ];

  return (
    <>
      {/* PAGE CONTENT */}
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f4f7fb",
          padding: "60px 20px",
          filter: showPopup ? "blur(4px)" : "none",
          pointerEvents: showPopup ? "none" : "auto",
          transition: "0.3s ease",
        }}
      >
        <div className="container">
          <h2 className="fw-bold text-primary mb-4 text-center">
            My Certificates
          </h2>

          <div className="row g-4">
            {certificatesData.map((cert, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <FaCertificate size={34} className="text-primary me-3" />
                      <h6 className="fw-semibold mb-0">
                        {cert.title}
                      </h6>
                    </div>

                    <p className="text-muted small mb-1">
                      <strong>Issued By:</strong> {cert.issuedBy}
                    </p>
                    <p className="text-muted small mb-1">
                      <strong>Issue Date:</strong> {cert.issueDate}
                    </p>
                    <p className="text-muted small mb-3">
                      <strong>Certificate ID:</strong> {cert.certificateId}
                    </p>

                    <span className="badge bg-success mb-3">
                      {cert.status}
                    </span>

                    <button
                      className="btn btn-outline-primary w-100 mt-3"
                      disabled={!isLoggedIn}
                    >
                      <FaFilePdf className="me-2" />
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LOGIN REQUIRED POPUP */}
      {showPopup && (
        <>
          {/* DARK OVERLAY */}
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
              zIndex: 1000,
            }}
          />

          {/* POPUP */}
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "420px",
              padding: "24px",
              zIndex: 1001,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            {/* CLOSE */}
            <div className="text-end">
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "22px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>

            <h5 className="fw-bold text-primary mb-3">
              Login Required
            </h5>

            <p className="text-muted">
              To view and download your digitally signed certificates,
              please login using your registered credentials.
            </p>

            <button
              className="btn btn-primary w-100 mt-3"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </>
      )}
    </>
  );
}
