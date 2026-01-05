import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      style={{
        backgroundImage: "url('/loginback.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",      // fill full viewport height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",  // ensure footer stays at bottom
        margin: 0,
      }}
    >
      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          zIndex: 0,
        }}
      />

      {/* LOGIN CARD */}
      <div
        className="shadow-lg"
        style={{
          width: "420px",
          padding: "2rem",
          zIndex: 1,
          borderRadius: "16px",
          backgroundColor: "#ffffff",
        }}
      >
        <h2 className="text-center fw-bold mb-4 text-primary">Login</h2>

        <form>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>

          <div className="mb-3 text-end">
            <Link to="/forgot-password" className="text-primary fw-semibold">
              Forgot Password?
            </Link>
          </div>

          <button className="btn btn-primary w-100 py-2 mt-2">Login</button>
        </form>

        <div className="text-center mt-3">
          <span className="text-muted">Don’t have an account?</span>{" "}
          <Link to="/register" className="fw-semibold text-primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
