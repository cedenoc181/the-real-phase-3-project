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
      <p>{stock.name}</p>
      <p>market cap: ${stock.marketCap}</p>
      <p>{stock.exchangeShortName}</p>
      <button onClick={handleClick}>Add to watchlist</button>
    </div>
    </>
  );
}

export default StocksCard;
