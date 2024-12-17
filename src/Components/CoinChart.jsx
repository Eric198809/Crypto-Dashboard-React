import axios from "axios";
import  { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const CoinChart = ({ coinId, coinName }) => {
  const [duration, setDuration] = useState(30);
  const [coinData, setcoinData] = useState([]);

  const headerData = [
    [1, "1 jour"],
    [3, "3 jours"],
    [7, "7 jours"],
    [30, "1 mois"],
    [91, "3 mois"],
    [181, "6 mois"],
    [365, "1 an"],
    [3000, "Max"],
  ];

  const fetchData = async () => {
    let dataArray = [];
    const getData = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${
        duration > 32 ? "&interval=daily" : ""
      }`
    );

    for (let i = 0; i < getData.data.prices.length; i++) {
      let price = getData.data.prices[i][1];

      dataArray.push({
        date: new Date(getData.data.prices[i][0]).toLocaleDateString(),
        price: price < 50 ? price : parseInt(price),
      });
      
    };

    setcoinData(dataArray);
    console.log(dataArray);
  
  };

  useEffect(() => {
    fetchData();
  }, [duration]);

  return (
    <div className="coin-chart">
      <p>{coinName}</p>
      <div className="btn-container">
        {headerData.map((el, id) => (
          <div
            key={id}
            htmlFor={"btn" + el[0]}
            onClick={() => setDuration(el[0])}
            className={el[0] === duration ? "active-btn" : ""}
          >
            {el[1]}
          </div>
        ))}
      </div>
      <AreaChart height={250} width={680} data={coinData} margin={{top : 10 , right: 0, left: 100, bottom: 0}}> 
      <XAxis dataKey="date"/>
      <YAxis domain={["auto" , "auto" ]}/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
     <Area type="monotone" dataKey="price" strokes="#00b7b3" fillOpacity={1} fill="url(#colorUv)"/>
      
      </AreaChart>
    </div>
  );
};

export default CoinChart;
