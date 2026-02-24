export default function Stats() {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted mb-4">
            That's why 1.3+ crore customer trust Zerodha with ₹3.5+ lakh crore
            wroth of quality investment
          </p>
          <h2 className="fs-4">No Spam or gimmicks</h2>
          <p className="text-muted mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted mb-4">
            Not just an app, but a whole ecosystem. Our investment in 30+
            fintech startups offer you tailored service specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted mb-4">
            With initiative like Nudge and Kill Switch, we don't just facilitate
            transaction, but actively help you do better with your money
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="Eco-System"
            style={{ width: "90%" }}
          />
          <div className="text-center">
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products
              <i className="fa-solid fa-arrow-right-long mx-1"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try kite demo<i className="fa-solid fa-arrow-right-long mx-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
