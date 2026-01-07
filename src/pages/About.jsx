import { useState } from "react";

export default function About() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="container py-5">

      {/* PAGE HEADER WITH LOGO */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <img src="/itkclogo.png" alt="ITKC Logo" className="about-logo" />
        </div>

        <div className="col-md-6 text-center text-md-start">
          <h2 className="fw-bold text-primary mb-1">
            Info Tech Corporation of Goa Limited
          </h2>
          <p className="text-muted mb-0">
            A Government of Goa Undertaking
          </p>
        </div>
      </div>

      {/* ABOUT + CONTACT + MAP */}
      <div className="row g-4 align-items-stretch mb-5">

        {/* ABOUT SECTION */}
        <div className="col-md-7">
          <h4 className="fw-semibold mb-3">Who We Are</h4>
          <p className="text-muted">
            Info Tech Corporation of Goa Limited (ITG) is a Government of Goa
            undertaking responsible for promoting Information Technology,
            digital governance, and skill development initiatives across the
            state.
          </p>
          <p className="text-muted">
            Through flagship programs such as the{" "}
            <strong>Integrated Training & Knowledge Centre (ITKC)</strong>, ITG
            empowers students, youth, and institutions with industry-relevant IT
            education and certifications.
          </p>
        </div>

        {/* CONTACT CARD + MAP SIDE BY SIDE */}
        <div className="col-md-5">
          <div className="row g-3 h-100">

            {/* CONTACT CARD */}
            <div className="col-md-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <h6 className="fw-bold mb-3 text-primary">
                    Registered Office
                  </h6>
                  <p className="mb-1">3rd Floor, IT Hub, Altinho</p>
                  <p className="mb-2">Panaji – Goa</p>

                  <p className="mb-1">
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+918322226024">+91 (832) 2226024</a>,{" "}
                    <a href="tel:+918322225192">2225192</a>
                  </p>

                  <p className="mb-3">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:md-itg.goa@nic.in">
                      md-itg.goa@nic.in
                    </a>
                  </p>

                  <a
                    href="https://maps.app.goo.gl/ndjeiohb4VNWGBiKA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="col-md-6">
              <div className="map-wrapper h-100 shadow rounded">
                <iframe
                  src="https://www.google.com/maps?q=IT%20Hub%20Altinho%20Panaji%20Goa&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ITG Location"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MISSION / VISION */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="fw-semibold text-primary mb-3">Our Mission</h5>
              <p className="text-muted">
                To enable inclusive digital growth by delivering quality IT
                infrastructure, training, and e-governance services.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="fw-semibold text-primary mb-3">Our Vision</h5>
              <p className="text-muted">
                To position Goa as a digitally empowered state through
                innovation, skill development, and technology-driven governance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* KEY RESPONSIBILITIES */}
      <div className="mb-5">
        <h4 className="fw-semibold mb-4 text-center">Key Responsibilities</h4>
        <div className="row g-4">
          {[
            "Implementation of IT & e-Governance projects",
            "Skill development and IT training programs",
            "Management of IT infrastructure and data centers",
            "Digital services for government departments",
            "Promotion of IT awareness and digital literacy",
          ].map((item, index) => (
            <div key={index} className="col-md-6">
              <div className="p-3 border rounded bg-light h-100">
                ✓ {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a href="/courses" className="btn btn-primary px-4 me-2">
          View Courses
        </a>
        <button
          className="btn btn-outline-primary px-4"
          onClick={() => setShowContact(true)}
        >
          Contact Us
        </button>
      </div>

      {/* CONTACT MODAL */}
      {showContact && (
        <div className="contact-backdrop">
          <div className="contact-modal">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h4 className="text-primary mb-0">Get In Touch</h4>
              <button
                className="btn-close"
                onClick={() => setShowContact(false)}
              ></button>
            </div>

            <p className="text-muted">
              Fill out the form and we’ll get back to you shortly.
            </p>

            <form>
              <input className="form-control mb-2" placeholder="Name" />
              <input className="form-control mb-2" placeholder="Subject" />
              <input className="form-control mb-2" placeholder="Email" />
              <textarea
                className="form-control mb-3"
                rows="4"
                placeholder="Message"
              ></textarea>
              <button className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      )}

      {/* INLINE CSS */}
      <style>{`
        .about-logo {
          max-width: 420px;
          width: 100%;
          height: auto;
        }

        .map-wrapper {
          width: 100%;
          min-height: 100%;
          overflow: hidden;
        }

        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (max-width: 768px) {
          .about-logo {
            max-width: 300px;
            margin: 0 auto;
          }

          .map-wrapper {
            height: 220px;
          }
        }

        .contact-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }

        .contact-modal {
          background: #fff;
          width: 100%;
          max-width: 450px;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.25);
        }
      `}</style>

    </div>
  );
}
