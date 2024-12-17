import { useState } from "react";
import Tableline from "./Tableline";
import ToTop from "./ToTop";

const Table = ({ coinsData }) => {
  const [rangeNumber, setRangeNumber] = useState(100);
  const [orderBy, setOrderBy] = useState("");
  const tableHeader = [
    "Prix",
    "MarketCap",
    "Volume",
    "1h",
    "1j",
    "1s",
    "1m",
    "6m",
    "1a",
    "ATH",
  ];

  return (
    <div className="table-container">
      <ul className="table-header">
        <div className="range-container">
          <span>
            {" "}
            Top{" "}
            <input
              type="text"
              value={rangeNumber}
              onChange={(e) => setRangeNumber(e.target.value)}
            />
          </span>
          <input
            type="range"
            min="1"
            max="250"
            value={rangeNumber}
            onChange={(e) => setRangeNumber(e.target.value)}
          />
         <ToTop/>
        </div>
        {tableHeader.map((element) => (
          <li key={element}>
            <input
              type="radio"
              name="header-element"
              id={element}
              defaultChecked={
                element === orderBy || element === `${orderBy} reverse`
                  ? true
                  : false
              }
              onClick={() => {
                if (orderBy === element) {
                  setOrderBy(`${element} reverse`);
                } else {
                  setOrderBy(element);
                }
              }}
            />
            <label htmlFor={element}>{element}</label>
          </li>
        ))}
      </ul>
      {coinsData &&
        coinsData
          .slice(0, rangeNumber)
          .sort((a,b)=> {
           switch (orderBy) {
            case "Prix":
              return b.current_price - a.current_price;
            case "Volume":
              return b.total_volume - a.total_volume;
            case "MarketCap":
              return b.market_cap - a.market_cap;
            case "1h":
              return (
                b.price_change_percentage_1h_in_currency -
                a.price_change_percentage_1h_in_currency
              );
            case "1j":
              return (
                b.market_cap_change_percentage_24h -
                a.market_cap_change_percentage_24h
              );
            case "1s":
              return (
                b.price_change_percentage_7d_in_currency -
                a.price_change_percentage_7d_in_currency
              );
            case "1m":
              return (
                b.price_change_percentage_30d_in_currency -
                a.price_change_percentage_30d_in_currency
              );
            case "6m":
              return (
                b.price_change_percentage_200d_in_currency -
                a.price_change_percentage_200d_in_currency
              );
            case "1a":
              return (
                b.price_change_percentage_1y_in_currency -
                a.price_change_percentage_1y_in_currency
              );
            case "ATH":
              return b.ath_change_percentage - a.ath_change_percentage;
            case "#reverse":
              return a.market_cap - b.market_cap;
            case "Prix reverse":
              return a.current_price - b.current_price;
            case "Volume reverse":
              return a.total_volume - b.total_volume;
            case "MarketCap reverse":
              return a.market_cap - b.market_cap;
            case "1h reverse":
              return (
                a.price_change_percentage_1h_in_currency -
                b.price_change_percentage_1h_in_currency
              );
            case "1j reverse":
              return (
                a.market_cap_change_percentage_24h -
                b.market_cap_change_percentage_24h
              );
            case "1s reverse":
              return (
                a.price_change_percentage_7d_in_currency -
                b.price_change_percentage_7d_in_currency
              );
            case "1m reverse":
              return (
                a.price_change_percentage_30d_in_currency -
                b.price_change_percentage_30d_in_currency
              );
            case "6m reverse":
              return (
                a.price_change_percentage_200d_in_currency -
                b.price_change_percentage_200d_in_currency
              );
            case "1a reverse":
              return (
                a.price_change_percentage_1y_in_currency -
                b.price_change_percentage_1y_in_currency
              );
            case "ATH reverse":
              return a.ath_change_percentage - b.ath_change_percentage;
            default:
              null;
           } 
          })
          .map((coin , index) => <Tableline key={index} coin={coin} index= {index}/>)}
    </div>
  );
};

export default Table;
