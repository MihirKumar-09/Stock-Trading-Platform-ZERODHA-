export default function Brokerage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-8">
          <a href="" className="text-decoration-none text-center">
            <h4 className="fs-5">Brokerage calculator</h4>
          </a>
          <ul className="mt-4 text-muted" style={{ lineHeight: "2.6" }}>
            <li>
              Call & Trades and RMS auto-squareoff: Additional charges of
              &#x20B9;50+ GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              &#x20B9;20 per contact note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or &#x20B9;100 per execute order
              for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or &#x20B9;200 per execute order for
              equity (whichever is lower).
            </li>
          </ul>
        </div>
        <div className="col-4">
          <a href="" className="text-decoration-none">
            <h4 className="fs-5">List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}
