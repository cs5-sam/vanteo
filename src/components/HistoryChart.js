import React, {useRef, useEffect} from 'react'
// import {Bar} from "react-chartjs-2"

const HistoryChart = () => {    
    const chartRef = useRef()
    // useEffect(() => {
    //     if (chartRef && chartRef.current){
    //         <Bar height={400} width={600} data={{
    //             labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                
    //         }}
    //         options={{
    //             maintainAspectRatio:false
    //         }}/>
    //     }
    // })
    return (
        <div>
            {/* <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas> */}
        </div>
    )
}

export default HistoryChart
