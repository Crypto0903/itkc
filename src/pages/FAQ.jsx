export default function FAQ() {
  return (
    <div className="container py-5">
      <h3 className="fw-bold text-center mb-4">Frequently Asked Questions</h3>

      <div className="accordion" id="faq">
        {[
          "How do I sign up?",
          "Is training free?",
          "How to check application status?",
          "What documents are required?",
        ].map((q, i) => (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target={`#q${i}`}
              >
                {q}
              </button>
            </h2>
            <div id={`q${i}`} className="accordion-collapse collapse">
              <div className="accordion-body">
                Answer will be provided by ITKC authority.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
