export default function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 mb-5 p-5">
          <div>
            <div
              className="bg-light p-3 border"
              data-bs-toggle="collapse"
              href="#collapseAccountOpening"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <i
                className="fa-solid fa-square-plus me-3 fs-4"
                style={{ color: "#387ED1" }}
              ></i>
              <span style={{ fontSize: "18px", fontWeight: "500" }}>
                Account Opening
              </span>
            </div>
            <ul
              className="collapse border-bottom border-end border-start"
              id="collapseAccountOpening"
            >
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Resident individual</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Minor</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Non Resident Indian (NRI)</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Company, PartnerShip, HUF and LLP</li>
              </a>
            </ul>
          </div>
          <div className="mt-4">
            <div
              className="bg-light p-3 border"
              data-bs-toggle="collapse"
              href="#collapseZerodhaAccount"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <i
                className="fa-regular fa-circle-user me-3 fs-4"
                style={{ color: "#387ED1" }}
              ></i>
              <span style={{ fontSize: "18px", fontWeight: "500" }}>
                Your Zerodha Account
              </span>
            </div>
            <ul
              className="collapse border-bottom border-end border-start "
              id="collapseZerodhaAccount"
            >
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Your Profile</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Account modification</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">
                  Client Master Report (CMR) and Depository Participate (DP)
                </li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Nomination</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">
                  Transfer and conversion of security
                </li>
              </a>
            </ul>
          </div>

          <div className="mt-4">
            <div
              className="bg-light p-3 border"
              data-bs-toggle="collapse"
              href="#collapseKite"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <i
                className="fa-brands fa-uikit me-3 fs-4"
                style={{ color: "#387ED1" }}
              ></i>
              <span style={{ fontSize: "18px", fontWeight: "500" }}>Kite</span>
            </div>
            <ul
              className="collapse border-bottom border-end border-start "
              id="collapseKite"
            >
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">IPO</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Trading FAQs</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">
                  Margin Trading Facility (MTF) and Margins
                </li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Charts and orders</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Alerts and Nudges</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">General</li>
              </a>
            </ul>
          </div>

          <div className="mt-4">
            <div
              className="bg-light p-3 border"
              data-bs-toggle="collapse"
              href="#collapseFunds"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <i
                className="fa-solid fa-indian-rupee-sign me-3 fs-4"
                style={{ color: "#387ED1" }}
              ></i>
              <span style={{ fontSize: "18px", fontWeight: "500" }}>Funds</span>
            </div>
            <ul
              className="collapse border-bottom border-end border-start "
              id="collapseFunds"
            >
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Add money</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Withdraw money</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Add bank accounts</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">eMandates</li>
              </a>
            </ul>
          </div>

          <div className="mt-4">
            <div
              className="bg-light p-3 border"
              data-bs-toggle="collapse"
              href="#collapseConsole"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <i
                className="fa-solid fa-bullseye me-3 fs-4"
                style={{ color: "#387ED1" }}
              ></i>
              <span style={{ fontSize: "18px", fontWeight: "500" }}>
                Console
              </span>
            </div>
            <ul
              className="collapse border-bottom border-end border-start "
              id="collapseConsole"
            >
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Portfolio</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Corporate action</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Funds statement</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Reports</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Profile</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Segment</li>
              </a>
            </ul>
          </div>

          <div className="mt-4">
            <div
              className="bg-light p-3 border"
              data-bs-toggle="collapse"
              href="#collapseCoin"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <i
                className="fa-solid fa-piggy-bank me-3 fs-4"
                style={{ color: "#387ED1" }}
              ></i>
              <span style={{ fontSize: "18px", fontWeight: "500" }}>Coin</span>
            </div>
            <ul
              className="collapse border-bottom border-end border-start "
              id="collapseCoin"
            >
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Mutual funds</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">National Pension Scheme (NPS)</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Fixed Deposit (FD)</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Features on Coin</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">Payments and Orders</li>
              </a>
              <a href="" className="text-decoration-none">
                <li className="mt-2 mb-2">General</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="col-4 p-5">
          <div
            style={{
              backgroundColor: "#FFF4E5",
              borderLeft: "7px solid orange",
            }}
            className="p-4 mb-5"
          >
            <ul>
              <a href="">
                <li className="mb-4">
                  Current Takeovers and Delisting – February 2026
                </li>
              </a>
              <a href="">
                <li>Surveillance measure on scrips - February 2026</li>
              </a>
            </ul>
          </div>
          <div className="border">
            <p className="m-0 p-2 border">Quick links</p>
            <ol>
              <a href="" className="text-decoration-none">
                <li style={{ fontSize: "17px" }} className="p-2">
                  Track account opening
                </li>
              </a>
              <a href="" className="text-decoration-none">
                <li style={{ fontSize: "17px" }} className="p-2">
                  Track segment activation
                </li>
              </a>
              <a href="" className="text-decoration-none">
                <li style={{ fontSize: "17px" }} className="p-2">
                  Intraday margins
                </li>
              </a>
              <a href="" className="text-decoration-none">
                <li style={{ fontSize: "17px" }} className="p-2">
                  Kite user manuals
                </li>
              </a>
              <a href="" className="text-decoration-none">
                <li style={{ fontSize: "17px" }} className="p-2">
                  Learn how to create a ticket
                </li>
              </a>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
