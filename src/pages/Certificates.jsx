import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const certificatesData = [
  {
    title: "React Development",
    issuedBy: "ITKC",
    date: "Jan 2026",
    image: "/cert1.jpg",
  },
  {
    title: "Full Stack Development",
    issuedBy: "ITKC",
    date: "Feb 2026",
    image: "/cert2.jpg",
  },
  {
    title: "Data Analytics",
    issuedBy: "ITKC",
    date: "Mar 2026",
    image: "/cert3.jpg",
  },
  {
    title: "Machine Learning",
    issuedBy: "ITKC",
    date: "Apr 2026",
    image: "/cert4.jpg",
  },
];

const Certificates = () => {
  return (
    <>
      <style>{`
        .certificates-page {
          min-height: 100vh;
          background: linear-gradient(to right, #e3f2fd, #f1f8e9);
          padding: 60px 20px;
        }

        .cert-title {
          text-align: center;
          color: #0d47a1;
          font-weight: 600;
          margin-bottom: 40px;
          font-size: 2rem;
        }

        .certificate-card {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .certificate-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 35px rgba(0,0,0,0.2);
        }

        .certificate-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .certificate-body {
          padding: 16px;
        }

        .certificate-title {
          font-weight: 500;
          color: #01579b;
          font-size: 1.1rem;
        }

        .certificate-sub {
          color: #607d8b;
          font-size: 0.9rem;
        }
      `}</style>

      <div className="certificates-page">
        <h2 className="cert-title">My Certificates</h2>
        <div className="container">
          <div className="row g-4">
            {certificatesData.map((cert, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                <div className="certificate-card">
                  <img src={cert.image} alt={cert.title} />
                  <div className="certificate-body">
                    <div className="certificate-title">{cert.title}</div>
                    <div className="certificate-sub">
                      {cert.issuedBy} • {cert.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
