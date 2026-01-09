import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Home() {
  const slides = [
    {
      img: "/Carousel1.png",
      title: "IT & Knowledge Centre (ITKC)",
      desc:
        "A government-supported initiative focused on enhancing digital literacy and strengthening information technology skills across the state.",
    },
    {
      img: "/Carousel2.png",
      title: "Skill Development & Training",
      desc:
        "Structured IT training programs delivered through authorized centres to support workforce readiness and professional growth.",
    },
    {
      img: "/Carousel3.png",
      title: "Government-Recognized Certification",
      desc:
        "Digital certifications issued upon successful completion of approved training programs.",
    },
    {
      img: "/Carousel4.png",
      title: "Empowering Digital India",
      desc:
        "Supporting digital education initiatives aligned with national and state-level skill development goals.",
    },
  ];

  return (
    <>
      {/* HERO CAROUSEL */}
      <section>
        <div
          id="itkcCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* INDICATORS */}
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#itkcCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
              ></button>
            ))}
          </div>

          {/* SLIDES */}
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{ height: "70vh" }}
              >
                <img
                  src={slide.img}
                  className="d-block w-100"
                  alt={slide.title}
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(70%)",
                  }}
                />

                {/* OVERLAY CONTENT */}
                <div className="carousel-caption d-flex align-items-center h-100">
                  <div
                    className="text-start p-4"
                    style={{
                      backgroundColor: "rgba(13,110,253,0.85)",
                      borderRadius: "10px",
                      maxWidth: "720px",
                    }}
                  >
                    <h1 className="fw-bold">{slide.title}</h1>
                    <p className="lead">{slide.desc}</p>

                    <div className="d-flex gap-3 flex-wrap mt-3">
                      <Link
                        to="/register"
                        className="btn btn-light text-primary"
                      >
                        Register
                      </Link>
                      <Link
                        to="/login"
                        className="btn btn-outline-light"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CONTROLS */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#itkcCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#itkcCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold text-primary mb-3">
            Welcome to IT Knowledge Centre
          </h2>
          <p className="text-muted">
            The IT Knowledge Centre (ITKC) is a government-supported initiative
            established to promote digital literacy and provide structured,
            quality-oriented information technology education to students, job
            seekers, and working professionals through standardized training
            programs.
          </p>
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
                  knowledge and digital competency.
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
                  approved training programs.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="h-100 p-4 bg-white shadow-sm border-start border-primary border-4">
                <h6 className="fw-semibold text-primary mb-2">
                  Authorized Training Centres
                </h6>
                <p className="text-muted small mb-0">
                  Training conducted exclusively through authorized IT
                  Knowledge Centres.
                </p>
              </div>
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
            Supporting digital education and skill development initiatives
            aligned with government standards.
          </p>
          <Link to="/register" className="btn btn-light text-primary">
            Register
          </Link>
        </div>
      </section>
    </>
  );
}
