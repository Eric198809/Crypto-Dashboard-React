import { useState, useEffect } from 'react'
import HeaderInfos from './Components/HeaderInfos'
import Table from './Components/Table'
import axios from 'axios'
import ToTop from './Components/ToTop'


function App() {
  const [coinsData, setCoinsData]= useState([])

useEffect(() => {
  const fetchData = async()=> {
    const data = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y");
      setCoinsData(data.data);
      
   }
fetchData();

window.addEventListener("scroll", ()=>{
 if (window.scrollY > 145) {
  document.querySelector(".table-header").classList.add("active")
 } else{
  document.querySelector(".table-header").classList.remove("active")
 }
})
   }, []);

  return (
  <div className="app-container">
    <header>
      <HeaderInfos/>
    </header>
    <Table coinsData= {coinsData}/>
    <ToTop/>
  </div>
  )
}

export default App
