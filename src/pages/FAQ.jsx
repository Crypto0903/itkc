export default function FAQ() {
  return (
    <div className="container py-5">
      <h3 className="fw-bold text-center mb-4">
        Frequently Asked Questions
      </h3>

      <div className="accordion" id="faq">
        {[
          {
            q: "How do I sign up?",
            a: (
              <>
                If you already have an account, you can login using your
                registered email and password.
                <br />
                If you do not have an account, you can create one by filling
                out the form in the <strong>Register</strong> section.
              </>
            ),
          },
          {
            q: "What documents are required to be uploaded with online application?",
            a: (
              <>
                <strong>For General Applicant:</strong>
                <ul>
                  <li>Passport Size Photo</li>
                </ul>

                <strong>For TSP Applicant:</strong>
                <ul>
                  <li>Passport Size Photo</li>
                  <li>Aadhaar Card</li>
                  <li>Caste Certificate</li>
                  <li>Birth Certificate</li>
                </ul>
              </>
            ),
          },
          {
            q: "What do I do if I forgot my password?",
            a: (
              <>
                You can reset your password by clicking on the
                <strong> “Forgot Password” </strong> option.
                <br />
                You will receive a reset link on your registered email
                address and an SMS on your registered mobile number.
              </>
            ),
          },
          {
            q: "How can I check my application status?",
            a: (
              <>
                You can track the status of your application by logging
                into the portal.
                <br />
                The current status will be visible in the
                <strong> “My Applications” </strong> section.
              </>
            ),
          },
          {
            q: "Can I apply for multiple applications?",
            a: "Yes, you can apply for multiple applications.",
          },
          {
            q: "Do I need to pay any fees?",
            a: (
              <>
                Fees are exempted for <strong>TSP applicants</strong>.
                <br />
                Applicants belonging to the general category need to pay
                the course fees for the courses they choose.
              </>
            ),
          },
        ].map((item, i) => (
          <div className="accordion-item" key={i}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#q${i}`}
              >
                {item.q}
              </button>
            </h2>

            <div
              id={`q${i}`}
              className="accordion-collapse collapse"
              data-bs-parent="#faq"
            >
              <div className="accordion-body">
                {item.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
