import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section style={{ position: "relative", height: "70vh", overflow: "hidden" }}>
        <img
          src="/Carousel1.png"
          alt="IT Knowledge Centre"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(70%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="container">
            <div
              className="text-white p-4"
              style={{
                backgroundColor: "rgba(13, 110, 253, 0.85)",
                borderRadius: "10px",
                maxWidth: "720px",
              }}
            >
              <h1 className="fw-bold mb-3">
                IT & Knowledge Centre (ITKC)
              </h1>
              <p className="lead mb-4">
                A government-supported initiative focused on enhancing digital
                literacy, strengthening information technology skills, and
                providing structured training and certification opportunities
                through authorized centres across the state.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Link to="/register" className="btn btn-light text-primary">
                  Register
                </Link>
                <Link to="/login" className="btn btn-outline-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h2 className="fw-bold text-primary mb-3">
                Welcome to IT Knowledge Centre
              </h2>
              <p className="text-muted">
                The IT Knowledge Centre (ITKC) is a government-supported initiative
                established to promote digital literacy and provide structured,
                quality-oriented information technology education. The centre
                aims to equip students, job seekers, and working professionals
                with practical skills aligned with evolving technological and
                workforce requirements through standardized training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-5" style={{ backgroundColor: "#f5f8fc" }}>
        <div className="container">
          <h3 className="fw-bold text-primary text-center mb-4">
            Key Services
          </h3>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="h-100 p-4 bg-white shadow-sm border-start border-primary border-4">
                <h6 className="fw-semibold text-primary mb-2">
                  Skill Development Programs
                </h6>
                <p className="text-muted small mb-0">
                  Structured IT training programs designed to enhance practical
                  knowledge, improve digital competency, and support continuous
                  learning in line with industry and government standards.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="h-100 p-4 bg-white shadow-sm border-start border-primary border-4">
                <h6 className="fw-semibold text-primary mb-2">
                  Government-Recognized Certification
                </h6>
                <p className="text-muted small mb-0">
                  Digital certifications issued upon successful completion of
                  approved training programs, providing formal recognition of
                  acquired skills for academic and professional purposes.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="h-100 p-4 bg-white shadow-sm border-start border-primary border-4">
                <h6 className="fw-semibold text-primary mb-2">
                  Authorized Training Centres
                </h6>
                <p className="text-muted small mb-0">
                  Training is conducted exclusively through authorized IT
                  Knowledge Centres to ensure quality delivery, standardized
                  curriculum, and compliance with government guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOUNT ACCESS */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 text-center">
              <h3 className="fw-bold text-primary mb-3">
                Account Access
              </h3>
              <p className="text-muted">
                Registered users may securely access their account to manage
                personal information, review training-related details, and
                maintain records associated with their participation in ITKC
                programs. Secure access ensures transparency, accuracy, and ease
                of record management.
              </p>
              <Link to="/login" className="btn btn-primary mt-2">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section
        className="py-5 text-white text-center"
        style={{ backgroundColor: "#0b5ed7" }}
      >
        <div className="container">
          <h3 className="fw-bold mb-3">
            Empowering Digital Skills Through ITKC
          </h3>
          <p className="mb-4">
            The IT Knowledge Centre continues to support digital education and
            skill development initiatives aimed at strengthening the
            technology-driven workforce.
          </p>
          <Link to="/register" className="btn btn-light text-primary">
            Register
          </Link>
        </div>
      </section>
    </>
  );
}
