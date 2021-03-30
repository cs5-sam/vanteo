import React from 'react'
import '../App.css'
import AddCoin from './AddCoin'
import Header from './Header'
import CoinList from './CoinList';

const CoinSummaryPage = () => {
    return (
        <div>
            <Header/>
            <CoinList/>
        </div>
    )
}

export default CoinSummaryPage
