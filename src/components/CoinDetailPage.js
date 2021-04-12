import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import HistoryChart from '../components/HistoryChart'
import CoinData from '../components/CoinData'
import coinGecko from '../apis/coinGecko'

const CoinDetailPage = () => {
    const {id} = useParams()
    const [coinData, setCoinData] = useState([])
    useEffect(() => {
        const fetchData = async() => {

            // simultaneoulsy calling all the end points of API
            const {day, week, year} = await Promise.all([coinGecko.get(`/coins/${id}/market_chart/`,{
                params:{
                    vs_currency: "usd",
                    days:"1",
                },
            }),
            coinGecko.get(`/coins/${id}/market_chart/`,{
                params:{
                    vs_currency: "usd",
                    days:"7",
                },
            }),
            coinGecko.get(`/coins/${id}/market_chart/`,{
                params:{
                    vs_currency: "usd",
                    days:"365",
                },
            })
        ])
            
            console.log(day)
            setCoinData({day: day, week: week, year:year})
        };
        fetchData()
    }, []);
    const renderData = () => {
        return (
            <div className="coinlist">
                <HistoryChart/>
                <CoinData/>
            </div>
        )
    }
    return (
        renderData()
    )
}

export default CoinDetailPage
