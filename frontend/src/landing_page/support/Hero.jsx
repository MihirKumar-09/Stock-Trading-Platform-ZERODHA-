export default function Hero() {
  return (
    <div style={{ backgroundColor: "#F6F6F6" }}>
      <div className="container p-5">
        <div className="d-flex align-item-center justify-content-between">
          <h1>Support Portal</h1>
          <button
            className="btn btn-primary "
            style={{ width: "10%", fontSize: "16px", fontWeight: "500" }}
          >
            My tickets
          </button>
        </div>
        <div className="input-group input-group-lg mt-4">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            <i className="fa-brands fa-sistrix"></i>
          </span>
          <>
            <style>
              {`
                  .no-focus:focus {
                    box-shadow: none !important;
                    border-color: #ced4da !important;
                  }
              `}
            </style>

            <input
              type="text"
              className="form-control no-focus p-3"
              placeholder="Eg: How do I open my account, How do i active F&O...."
              style={{ fontSize: "17px" }}
            />
          </>
        </div>
      </div>
    </div>
  );
}
