import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Home from './Home';
import CoinSummaryPage from './components/CoinSummaryPage';
import { WatchListContextProvider } from './context/watchListContext';
import CoinDetailPage from './components/CoinDetailPage'

function App() {
    return (
        <>
            <WatchListContextProvider>
                <Router>
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
                    <div className="container">
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/track" exact component={CoinSummaryPage}></Route>
                        <Route path="/coins/:id" component={CoinDetailPage}></Route>
                    </Switch>
                    </div>
            </Router>
        </WatchListContextProvider>
    </>
    );
}

export default App;
