export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold">
                IT & Knowledge Centre
              </h1>
              <p className="lead">
                Government of Goa initiative for skill development,
                certification & IT training.
              </p>
              <a href="/register" className="btn btn-light text-primary btn-lg">
                Get Started
              </a>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                className="img-fluid rounded shadow"
                alt="Training"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why ITKC?</h2>
          <div className="row g-4">
            {[
              "Aadhaar Based Registration",
              "Free Training for SC/ST",
              "Digital Certificates",
              "Govt Recognized Institutes",
            ].map((f) => (
              <div className="col-md-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h6 className="fw-semibold">{f}</h6>
                    <p className="small text-muted">
                      Secure, transparent and digital learning ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
