export default function Contact() {
  return (
    <div className="container py-5">

      {/* Page Header */}
      <div className="mb-5 text-center">
        <h2 className="fw-bold text-primary">
          Info Tech Corporation of Goa Limited
        </h2>
        <p className="text-muted">
          A Government of Goa Undertaking
        </p>
      </div>

      {/* About Section */}
      <div className="row g-5 align-items-center mb-5">
        <div className="col-md-7">
          <h4 className="fw-semibold mb-3">Who We Are</h4>
          <p className="text-muted">
            Info Tech Corporation of Goa Limited (ITG) is a Government of Goa
            undertaking responsible for promoting Information Technology,
            digital governance, and skill development initiatives across the
            state.
          </p>

          <p className="text-muted">
            Through flagship programs such as the <strong>Integrated Training &
            Knowledge Centre (ITKC)</strong>, ITG empowers students, youth, and
            institutions with industry-relevant IT education and certifications.
          </p>
        </div>

        <div className="col-md-5">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="fw-bold mb-3 text-primary">Registered Office</h6>
              <p className="mb-1">3rd Floor, IT Hub, Altinho</p>
              <p className="mb-1">Panaji – Goa</p>
              <hr />
              <p className="mb-1">
                <strong>Phone:</strong> +91 (832) 2226024, 2225192
              </p>
              <p className="mb-0">
                <strong>Email:</strong> md-itg.goa@nic.in
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="fw-semibold text-primary mb-3">Our Mission</h5>
              <p className="text-muted">
                To enable inclusive digital growth by delivering quality IT
                infrastructure, training, and e-governance services that benefit
                citizens, students, and government departments.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="fw-semibold text-primary mb-3">Our Vision</h5>
              <p className="text-muted">
                To position Goa as a digitally empowered state through innovation,
                skill development, and technology-driven governance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Functions */}
      <div className="mb-5">
        <h4 className="fw-semibold mb-4 text-center">
          Key Responsibilities
        </h4>

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
        <a href="/contact" className="btn btn-outline-primary px-4">
          Contact Us
        </a>
      </div>
    </div>
  );
}
