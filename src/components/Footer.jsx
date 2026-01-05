import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="border-top"
      style={{
        backgroundColor: "#f5f6fb",
        width: "100%",
        bottom: 0,
        left: 0,
        position: "relative", // keeps footer just after content
      }}
    >
      <div className="container py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">

          {/* Left */}
          <div className="text-center text-md-start mb-3 mb-md-0">
            <div className="small text-muted">
              © {new Date().getFullYear()} <strong className="text-dark">ITKC</strong>. All Rights Reserved
            </div>
            <div className="small">
              Powered by{" "}
              <a
                href="#"
                className="text-primary text-decoration-none fw-semibold"
              >
                Demerg Systems India
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="d-flex align-items-center gap-3">
            {/* Social icons */}
            <a
              href="https://x.com/itg_goa?t=JKtoval2pk-04SmKhaTGOA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light rounded-circle shadow-sm"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.facebook.com/itggoa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light rounded-circle shadow-sm"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/itg_goa/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light rounded-circle shadow-sm"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="btn btn-primary rounded-circle shadow-sm"
              style={{ width: 40, height: 40 }}
              aria-label="Scroll to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
