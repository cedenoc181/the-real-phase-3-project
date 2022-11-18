import {React} from "react";
import "./Home.css";
import Plot from 'react-plotly.js'


function Home(onSearch) {

  return (
    <div className="Home">
      <div >
     
{/* conditionally render list on click */}
        <div className="list">

        <div className="list-title">
          <p className="display-watch">Watchlist</p>
          <p className="display-ownership">Ownership</p>
        </div>

        <div className="watch-list">
            <p className="symbol"></p>
            <p className="price"></p>
            <p className="name"></p>
       </div>
      
      <div className="Ownership-list">
            <p className="symbol"></p>
            <p className="price"></p>
            <p className="name"></p>
      </div>
      </div>

{/* render overall markets ontop of chart */}
         <div className="markets">

         </div>

{/* render chart depending on click of list */}
      <div className="chart">
{/* <CanvasJSChart /> */}
        </div>
{/* display stock-info that was rendered on the chart  */}
        <div className= "stock-info">

        </div>

      </div>

      <div className="chart">

      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
 
        </div>
    </div>
  );
}

export default Home;
