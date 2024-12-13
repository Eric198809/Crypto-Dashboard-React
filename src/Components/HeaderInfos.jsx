import axios from "axios";
import { useEffect, useState } from "react";
import PercentChange from "./PercentChange";
import{data} from "../Api";
import TableFilters from "./TableFilters";
const HeaderInfos = () => {
  const [headerData, setHeaderData] = useState([]);


 
    const fetchData = async()=> {
    const data = await axios
      .get("https://api.coingecko.com/api/v3/global");
      setHeaderData(data.data.data);
   }

useEffect(() => {
fetchData();
   }, []);

  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img src="./assets/logo.png" alt="" /> Watch Tower
          </h1>
        </li>
        <li>
          Crypto-monnaies:{" "}
          {headerData.active_cryptocurrencies && headerData.active_cryptocurrencies}
        </li>
        <li>Marché : {headerData.markets && headerData.markets}</li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">Global Market Cap : <PercentChange percent={headerData.market_cap_change_percentage_24h_usd && headerData.market_cap_change_percentage_24h_usd }/></li>
        <li>BTC Domiance : {headerData.market_cap_percentage && headerData.market_cap_percentage.btc.toFixed(1) + "%"}</li>
        <li>ETH Domiance : {headerData.market_cap_percentage && headerData.market_cap_percentage.eth.toFixed(1) + "%"}</li>
      </ul>
      <TableFilters/>
    </div>
  );
};

export default HeaderInfos;
