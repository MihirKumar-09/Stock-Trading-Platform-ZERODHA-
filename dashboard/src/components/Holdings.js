import { useState, useEffect, useMemo } from "react";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [holdingsRes, watchlistRes] = await Promise.all([
          fetch("http://localhost:3002/holdings/allHoldings"),
          fetch("http://localhost:3002/watchList/allWatchList"),
        ]);

        const holdingsData = await holdingsRes.json();
        const watchlistData = await watchlistRes.json();

        setAllHoldings(holdingsData.allHoldings);
        setWatchlist(watchlistData.allWatchLists);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  // Create price lookup map (O(n))
  const priceMap = useMemo(() => {
    return Object.fromEntries(watchlist.map((item) => [item.name, item.price]));
  }, [watchlist]);

  // Merge holdings + price
  const mergedHoldings = useMemo(() => {
    return allHoldings.map((holding) => ({
      ...holding,
      price: priceMap[holding.name] ?? null,
    }));
  }, [allHoldings, priceMap]);

  // Loading state
  if (loading) {
    return <p>Loading holdings...</p>;
  }

  // Totals
  const totalInvestment = mergedHoldings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0,
  );

  const totalCurrent = mergedHoldings.reduce(
    (acc, stock) =>
      stock.price !== null ? acc + stock.price * stock.qty : acc,
    0,
  );

  const totalPnL = totalCurrent - totalInvestment;

  const totalPercent =
    totalInvestment !== 0 ? (totalPnL / totalInvestment) * 100 : 0;

  const totalClass = totalPnL >= 0 ? "profit" : "loss";

  // Graph shows portfolio allocation (current value)
  const labels = mergedHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Current Value",
        data: mergedHoldings.map((stock) =>
          stock.price !== null ? stock.price * stock.qty : 0,
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({mergedHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
          </tr>

          {mergedHoldings.map((stock) => {
            const curValue = stock.price !== null ? stock.price * stock.qty : 0;

            const investment = stock.avg * stock.qty;

            const pnl = stock.price !== null ? curValue - investment : 0;

            const netPercent =
              stock.price !== null && stock.avg !== 0
                ? ((stock.price - stock.avg) / stock.avg) * 100
                : 0;

            const profClass = pnl >= 0 ? "profit" : "loss";

            return (
              <tr key={stock._id}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>₹{stock.avg.toFixed(2)}</td>
                <td>
                  {stock.price !== null ? `₹${stock.price.toFixed(2)}` : "N/A"}
                </td>
                <td>₹{curValue.toFixed(2)}</td>
                <td className={profClass}>₹{pnl.toFixed(2)}</td>
                <td className={profClass}>{netPercent.toFixed(2)}%</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>₹{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>₹{totalCurrent.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={totalClass}>
            ₹{totalPnL.toFixed(2)} ({totalPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
