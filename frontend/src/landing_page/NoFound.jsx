import { Link } from "react-router-dom";
export default function NoFound() {
  return (
    <div className="container p-5 mt-5" style={{ height: "83vh" }}>
      <div className="row text-center">
        <h1 className="mt-5">404 Not Found</h1>
        <p>Sorry, tha page you are looking for does not exist.</p>
        <Link to="/">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "16%", margin: "0 auto" }}
          >
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
