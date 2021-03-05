import React from 'react'
import CoinDetailPage from './components/CoinDetailPage';
import CoinSummaryPage from './components/CoinSummaryPage';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';

const Track = () => {
    return (
        <div>
            <h1>Tracking</h1>
            <h2>Something</h2>
            <button><Link to="/track/summary" >Track</Link></button>
        </div>
    )
}

export default Track
