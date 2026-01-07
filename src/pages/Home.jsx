import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Home() {
  const carouselSlides = [
    {
      title: "IT & Knowledge Centre",
      subtitle:
        "Skill development, certification, and IT training for learners of all ages.",
      img: "/Carousel1.png",
    },
    {
      title: "Digital Learning for Everyone",
      subtitle:
        "Empowering learners with modern IT skills and practical knowledge.",
      img: "/Carousel2.png",
    },
    {
      title: "Recognized Certifications",
      subtitle:
        "Earn certificates to showcase your skills and knowledge online.",
      img: "/Carousel3.png",
    },
    {
      title: "Build Your Future in IT",
      subtitle:
        "Industry-ready courses designed for real-world success.",
      img: "/Carousel4.png",
    },
  ];

  const features = [
    {
      title: "Easy Registration",
      desc: "Simple and secure signup process for learners of all backgrounds.",
      icon: "bi-person-check",
    },
    {
      title: "Inclusive Training",
      desc: "Training programs designed to benefit everyone equally.",
      icon: "bi-mortarboard",
    },
    {
      title: "Digital Certificates",
      desc: "Instantly downloadable certificates for completed courses.",
      icon: "bi-award",
    },
    {
      title: "Professional Learning",
      desc: "Courses conducted at approved and trusted training centres.",
      icon: "bi-building",
    },
  ];

  return (
    <>
      {/* HERO CAROUSEL */}
      <section>
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {carouselSlides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div
                  className="d-flex align-items-center"
                  style={{
                    minHeight: "65vh",
                    backgroundImage: `url(${slide.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="container">
                    <div
                      className="text-white"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        padding: "2rem",
                        borderRadius: "12px",
                        maxWidth: "600px",
                      }}
                    >
                      <h1 className="fw-bold">{slide.title}</h1>
                      <p className="lead">{slide.subtitle}</p>
                      <a
                        href="/register"
                        className="btn btn-light text-primary btn-lg"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose ITKC?</h2>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-3">
                <div className="card h-100 shadow-sm p-3">
                  <div className="mb-3 text-primary fs-2">
                    <i className={`bi ${feature.icon}`}></i>
                  </div>
                  <h6 className="fw-semibold">{feature.title}</h6>
                  <p className="small text-muted">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/Carousel2.png"
                className="img-fluid rounded shadow"
                alt="Learning"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">About ITKC</h2>
              <p className="text-muted">
                ITKC provides skill development, IT training, and digital
                certification courses for students and professionals.
              </p>
              <a href="/register" className="btn btn-primary">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-5 bg-primary text-white text-center">
        <h3 className="fw-bold mb-3">Join ITKC Today</h3>
        <p>Learn, certify, and grow your IT skills with recognized courses.</p>
        <a href="/register" className="btn btn-light text-primary btn-lg">
          Get Started
        </a>
      </section>
    </>
  );
}
