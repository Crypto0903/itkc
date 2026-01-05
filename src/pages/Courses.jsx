export default function Courses() {
  const courses = [
    "Web Development",
    "Data Analytics",
    "Cyber Security",
    "Networking",
    "Mobile App Development",
    "AI & Machine Learning",
  ];

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Available Courses</h2>

      <div className="row g-4">
        {courses.map((course, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="fw-semibold">{course}</h5>
                <p className="text-muted small">
                  Government certified training program under ITKC.
                </p>
                <button className="btn btn-primary btn-sm">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
