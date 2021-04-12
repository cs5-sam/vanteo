import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import HistoryChart from '../components/HistoryChart'
import CoinData from '../components/CoinData'
import coinGecko from '../apis/coinGecko'

const CoinDetailPage = () => {
    const {coin} = useParams()
    useEffect(() => {
        const fetchData = async() => {
            const results = await coinGecko.get(`/coins/${coin}/market_chart/`,{
                params:{
                    vs_currency: "usd",
                    days:"1",
                },
            });
            console.log(results.data)
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
