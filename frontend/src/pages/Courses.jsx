import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Courses() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const basicCourses = [
    {
      id: 1,
      name: "Diploma in ICT Skills and Office Management",
      duration: "26 Weeks",
      fees: "₹10,000 /-",
    },
    {
      id: 2,
      name: "Mahila Cyber Saksharta",
      duration: "1 Week",
      fees: "₹500 /-",
    },
  ];

  const hardwareCourses = [
    {
      id: 1,
      name:
        "Certification in Troubleshooting Computer Hardware & Operating System",
      duration: "8 Weeks",
      fees: "₹10,000 /-",
    },
    {
      id: 2,
      name:
        "Certification in Implementing & Administrating CISCO Network Solutions",
      duration: "8 Weeks",
      fees: "₹15,000 /-",
    },
    {
      id: 3,
      name: "Certification in Essentials of Ethical Hacking",
      duration: "8 Weeks",
      fees: "₹15,000 /-",
    },
  ];

  const ActionButton = () => (
    <button
      className="btn btn-outline-primary btn-sm"
      onClick={() => setShowPopup(true)}
    >
      Apply / View
    </button>
  );

  return (
    <>
      {/* PAGE CONTENT */}
      <div className="container py-5">
        <h2 className="fw-bold text-primary mb-4">
          Courses Offered by IT Knowledge Centre
        </h2>

        {/* BASIC COURSES */}
        <div className="mb-5 p-4 bg-light rounded shadow-sm">
          <h5 className="fw-bold text-white px-3 py-2 bg-primary rounded">
            Basic Certificate Courses
          </h5>

          <table className="table mt-3 align-middle">
            <thead className="table-warning">
              <tr>
                <th>Sr. No</th>
                <th>Course Name</th>
                <th>Duration</th>
                <th>Fees (Excl. Taxes)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {basicCourses.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.duration}</td>
                  <td>{c.fees}</td>
                  <td className="text-end">
                    <ActionButton />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* HARDWARE COURSES */}
        <div className="p-4 bg-light rounded shadow-sm">
          <h5 className="fw-bold text-white px-3 py-2 bg-primary rounded">
            Courses in Hardware and System Administration
          </h5>

          <table className="table mt-3 align-middle">
            <thead className="table-warning">
              <tr>
                <th>Sr. No</th>
                <th>Course Name</th>
                <th>Duration</th>
                <th>Fees (Excl. Taxes)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {hardwareCourses.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.duration}</td>
                  <td>{c.fees}</td>
                  <td className="text-end">
                    <ActionButton />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CUSTOM POPUP */}
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
            onClick={() => setShowPopup(false)}
          />

          {/* POPUP CARD */}
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
            {/* CLOSE ICON */}
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
              Please login to apply for courses or view detailed course
              information.
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
