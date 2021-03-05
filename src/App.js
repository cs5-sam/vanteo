import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Home from './Home';
import Track from './Track';
import CoinDetailPage from './components/CoinDetailPage';
import CoinSummaryPage from './components/CoinSummaryPage';

function App() {
    return (
    <Router>
        <>
        <nav className={'main-nav'}>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/track" >Track</Link>
            </li>
        </ul>
        </nav>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/track" exact component={CoinSummaryPage}></Route>
            <Route path="/track/summary" exact component={CoinSummaryPage}></Route>
        </Switch>
        </>
    </Router>
    );
}

export default App;
