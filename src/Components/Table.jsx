import { useState } from "react";
import Tableline from "./Tableline";

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
          .map((coin , index) => <Tableline key={index} coin={coin} index= {index}/>)}
    </div>
  );
};

export default Table;
