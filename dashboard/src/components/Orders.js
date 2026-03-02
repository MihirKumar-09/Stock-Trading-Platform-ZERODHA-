import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:3002/order/allOrders");
        const data = await res.json();
        setAllOrders(data.allOrders);
      } catch (err) {}
    };
    fetchOrders();
  }, []);
  return (
    <div className="orders">
      {allOrders.length <= 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="allOrder">
          <h3 className="title">Orders ({allOrders.length})</h3>

          <div className="order-table">
            <table>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Buy Price</th>
                <th>Mode</th>
                <th>Order Date</th>
              </tr>
              {allOrders.map((stock, index) => {
                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price}</td>
                    <td
                      className={
                        stock.mode?.trim().toUpperCase() === "BUY"
                          ? "buyStock"
                          : stock.mode?.trim().toUpperCase() === "SELL"
                            ? "sellStock"
                            : ""
                      }
                    >
                      {stock.mode}
                    </td>
                    <td>{new Date(stock.createdAt).toLocaleString()}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
