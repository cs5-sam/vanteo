import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

const CoinRender = ({coin}) => {
    return (
        <Link to="/coindetail">
            <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
                <img className="coinlist-image" style={{background:'white'}} src={coin.image} alt=""/>
                <span className="text-decoration-none" style={{color:'black', background:'white'}}>{coin.current_price.toLocaleString()}</span>
                <span className="text-success mr-2" style={{color:'black', background:'white'}}>
                    <i className="fas fa-angle-down align-middle mr-1"></i>
                    {coin.price_change_percentage_24h}
                </span>
                <i className="delete-icon fa fa-times-circle text-danger"></i>
            </li>
        </Link>
    )
}

export default CoinRender
