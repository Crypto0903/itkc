import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top" style={{ borderBottom: "1px solid #eaeaea" }}>
      <div className="container py-2">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/itkclogo.png" // your logo path
            alt="ITKC Logo"
            style={{
              height: "60px",       // adjust height for better visibility
              width: "auto",        // maintain aspect ratio
              objectFit: "contain", 
            }}
          />
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
            {["/", "/about", "/courses", "/certificates", "/faq"].map((path, i) => {
              const labels = ["Home", "About", "Courses","Certificates", "FAQ"];
              return (
                <li className="nav-item" key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `nav-link fw-medium ${isActive ? "text-primary" : "text-dark"}`
                    }
                  >
                    {labels[i]}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Auth buttons */}
          <div className="ms-lg-4 d-flex gap-2 mt-3 mt-lg-0">
            <Link to="/login" className="btn btn-outline-primary btn-sm px-3">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary btn-sm px-3">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
