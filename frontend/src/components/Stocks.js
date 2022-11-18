import React from "react";
import "./Stocks.css"
import StocksCard from "./StocksCard"
import Search from "./Search"



function Stocks({stocks, onSearch, addToWatchList}) {
  return (
    <>
  
     <div className="title">
        <h2>Stock library</h2>
        <Search onSearch={onSearch}/>
        </div>
      <div className="scroll">
        {/* run a map/each function to display api info for each stock */}
        {stocks.map ((stock, index) => (
          /* stock info from api print here */
       <StocksCard key={index} stock={stock} addToWatchList={addToWatchList}/>
          ))}
      </div>
</>
  );
}

export default Stocks;
