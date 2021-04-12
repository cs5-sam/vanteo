import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const CoinRender = ({coin}) => {
    return (
        <Link to="/coindetail" className="text-decoration-none coin-render">
            <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
                <img className="coinlist-image" style={{background:'white'}} src={coin.image} alt=""/>
                <span className="text-decoration-none" style={{color:'black', background:'white'}}>{coin.current_price.toLocaleString()}</span>
                <span className={coin.price_change_percentage_24h < 0 ? "text-danger mr-2" : "text-success mr-2"} style={{ background:'white'}}>
                    {coin.price_change_percentage_24h < 0 ? <i className="fas fa-sort-down align-middle mr-1"></i>
                    : <i className="fas fa-sort-up align-middle mr-1"></i>}
                    {coin.price_change_percentage_24h}
                </span>
                {/* <i className="delete-icon fas fa-times-circle text-danger"></i>#f057 */}
                {/* <i className="fa">&#xf057;</i> */}
                <button style={{backgroundColor:'white', color:'red', border:'none'}} className="delete-icon">X</button>
            </li>
        </Link>
    )
}

export default CoinRender
