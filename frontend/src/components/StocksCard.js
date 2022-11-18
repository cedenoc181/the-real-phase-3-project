import React from "react";
import "./Stocks.css"


function StocksCard({stock, addToWatchList}) {

  function handleClick() {
    addToWatchList(stock)
  }
  return (
<>
    <div className="stock-card">
      <p>{stock.symbol}</p>
      <p>{stock.price}</p>
      <p>{stock.sector}</p>
      <p>{stock.companyName}</p>
      <p>market cap: ${stock.marketCap}</p>
      <p>{stock.exchange}</p>
      <button onClick={handleClick}>Add to watchlist</button>
    </div>
    </>
  );
}

export default StocksCard;
