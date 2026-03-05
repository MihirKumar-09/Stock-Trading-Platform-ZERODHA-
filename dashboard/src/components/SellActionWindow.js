import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import GeneralContext from "./GeneralContext";

// import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const navigate = useNavigate();

  const handleSellClick = async () => {
    try {
      const res = await fetch("http://localhost:3002/order/sellOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "SELL",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Sell failed");

        setTimeout(() => {
          generalContext.closeSellWindow();
        }, 1000);

        return;
      }

      toast.success("Stock sold successfully");

      setTimeout(() => {
        generalContext.closeSellWindow();
        navigate("/holdings");
      }, 1000);
    } catch (err) {
      toast.error("Server error");

      setTimeout(() => {
        generalContext.closeSellWindow();
      }, 1000);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Stock will be sold instantly</span>

        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>

          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
