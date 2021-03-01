import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coin from './components/Coin';
import * as ReactBootstrap from 'react-bootstrap';

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false);
  const BASE_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  const coinFunction = () => {
    try{
    axios.get(BASE_URL)
    .then(res => {
      setCoins(res.data)
      console.log(res.data)
    });
    setLoading(true);
    }catch(error){console.log(error)}
};

  useEffect(() => {
    coinFunction();
  })

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <>
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">Search a currency</h1>
          <form>
            <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
          </form>
        </div>
        {filteredCoins.map(coin => {
          return (
            <Coin 
            key={coin.id} 
            name={coin.name} 
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}/>
          )
        })}
        {loading ? "Loading" : <ReactBootstrap.Spinner animation="border"/>}
      </div>
    </>
  );
}

export default App;
