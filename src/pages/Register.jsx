export default function Register() {
  return (
    <div className="container py-5">
      <h3 className="fw-bold text-center mb-4">Student Registration</h3>

      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "700px" }}>
        <div className="row g-3">
          <div className="col-md-6">
            <input className="form-control" placeholder="Full Name" />
          </div>
          <div className="col-md-6">
            <input className="form-control" placeholder="Email" />
          </div>
          <div className="col-md-6">
            <input className="form-control" placeholder="Mobile Number" />
          </div>
          <div className="col-md-6">
            <select className="form-select">
              <option>Category</option>
              <option>General</option>
              <option>SC</option>
              <option>ST</option>
            </select>
          </div>
        </div>

        <button className="btn btn-primary mt-4 w-100">
          Register
        </button>
      </div>
    </div>
  );
}
