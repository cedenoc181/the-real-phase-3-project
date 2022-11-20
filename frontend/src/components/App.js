import { Routes, Route, Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import Home from "./Home"
import Stocks from "./Stocks"
import Profile from "./Profile"
import "./App.css"


function App() {

  const [stocks, setStocks]= useState([]);
//  const[articles, setArticles] = useState([]);
const [searchKey, setSearchKey] = useState('');


  useEffect(() => {
 // list-by-symbol is a good news article api also has content access//
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '037d0c86ccmsha6e6717439f8530p171246jsn0038d9613e04',
    //     'X-RapidAPI-Host': 'seeking-alpha.p.rapidapi.com'
    //   }
    // };
    
    // fetch('https://api.polygon.io/v2/reference/news?apiKey=_2JqjW3Rs2UBY0ROqCFIN1v6Nbq6G_Ug', options)
    //   .then(response => response.json())
    //   .then(articlesData => {
    //     setArticles(articlesData)
    //     console.log(articlesData)})
    //   .catch(err => console.error(err));


    // list-by-symbol is a good news article api//
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '037d0c86ccmsha6e6717439f8530p171246jsn0038d9613e04',
    //     'X-RapidAPI-Host': 'seeking-alpha.p.rapidapi.com'
    //   }
    // };
    
    // fetch('https://seeking-alpha.p.rapidapi.com/news/v2/list-by-symbol?id=tsla&until=0&since=0&size=20&number=1', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));

// this returns three list of dividend stocks//
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '037d0c86ccmsha6e6717439f8530p171246jsn0038d9613e04',
    //     'X-RapidAPI-Host': 'seeking-alpha.p.rapidapi.com'
    //   }
    // };
    
    // fetch('https://seeking-alpha.p.rapidapi.com/market/get-dividend-investing', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));


// This is a great api link for stock page ///////////////////////////////////// API key under 
    //    fetch('https://financialmodelingprep.com/api/v3/stock/list?apikey=345d03e54402c34a9096c537f3b36196')
    //    .then(response => response.json())
    //    .then(security => {
    //   setStocks(security)
    //  console.log(security)})
    //   .catch(err => console.error(err));


// smaller list of stocks better data//
    fetch('https://financialmodelingprep.com/api/v3/stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=100&exchange=NYSE,NASDAQ&apikey=345d03e54402c34a9096c537f3b36196')
       .then(response => response.json())
       .then(security => {
      setStocks(security);
     console.log(security)
    })
      .catch(err => console.error(err));

}, []);

useEffect(() => {
 
    // fetch('https://api.polygon.io/v2/reference/news?apiKey=_2JqjW3Rs2UBY0ROqCFIN1v6Nbq6G_Ug', options)
    //   .then(response => response.json())
    //   .then(articlesData => {
    //     setArticles(articlesData)
    //     console.log(articlesData)})
    //   .catch(err => console.error(err));

}, []);
// useEffect(() => { 
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '037d0c86ccmsha6e6717439f8530p171246jsn0038d9613e04',
//       'X-RapidAPI-Host': 'seeking-alpha.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://seeking-alpha.p.rapidapi.com/news/v2/list-trending?until=0&since=0&size=20', options)
//     .then(response => response.json())
//     .then(articlesData => {
//       setArticles(articlesData)
//       console.log(articlesData)})
//     .catch(err => console.error(err));
// }, []);







function onSearch (searchKey){
  console.log(searchKey)
  setSearchKey(searchKey)
}
const filteredItemsFromSearch = stocks.filter((stock) => {
  return stock.companyName.toLowerCase().includes(searchKey.toLowerCase()) +
  stock.sector.toLowerCase().includes(searchKey.toLowerCase())+
  stock.exchange.toLowerCase().includes(searchKey.toLowerCase())+
  stock.symbol.toLowerCase().includes(searchKey.toLowerCase());
});
// console.log(filteredItemsFromSearch)

function addToWatchList(company) {
  // fetch post request with stock.whatever info you want to save
  // fetch to """
  fetch(`http://localhost:9292/${company.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },    
            body: JSON.stringify({
              "id": 1,
              "company": company
})
})

  return (
    <div className="App">
 <nav className="links">
 
        <Link className="link" to="/">
         Home
        </Link>

        <Link className="link" to="/stocks">
         Stocks
        </Link>

        <Link className="link" to="/News">
         Profile
        </Link>

        
      </nav>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/stocks" element={<Stocks stocks={filteredItemsFromSearch} onSearch={onSearch} /> } />
        <Route path="/profile" element={<Profile  addToWatchList={addToWatchList}/>} />

      </Routes>


      </div>

   


  );
}

export default App;
