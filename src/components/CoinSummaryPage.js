import React from 'react'
import '../App.css'
import AddCoin from './AddCoin'
import Header from './Header'
import CoinList from './CoinList';

const CoinSummaryPage = () => {
    return (
        <div>
            <Header/>
            <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
                <CoinList/>
            </div>
        </div>
    )
}

export default CoinSummaryPage
