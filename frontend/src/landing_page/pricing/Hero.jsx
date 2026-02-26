export default function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h4 className="fs-3 mt-5">Charges</h4>
        <p className="mb-5" style={{ fontSize: "22px", color: "gray" }}>
          List of all charges and taxes
        </p>
      </div>
      <div className="row mt-5 text-center">
        <div className="col mt-5">
          <img
            src="media/images/pricing0.svg"
            alt="Zero"
            style={{ width: "60%" }}
          />
          <h4 className="fs-3 mt-5">Free equity delivery</h4>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), <br /> are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col mt-5">
          <img
            src="media/images/intradayTrades.svg"
            alt="Twenty"
            style={{ width: "60%" }}
          />
          <h4 className="fs-3 mt-5">Intraday and F&O trades</h4>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on
            intraday trades across <br /> equity, currency, and commodity
            trades. Flat <br />
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col mt-5">
          <img
            src="media/images/pricing0.svg"
            alt="Zero"
            style={{ width: "60%" }}
          />
          <h4 className="fs-3 mt-5">Free direct MF</h4>
          <p className="text-muted">
            All direct mutual fund investments are <br /> absolutely free — ₹ 0
            commissions & DP <br /> charges.
          </p>
        </div>
      </div>
    </div>
  );
}
