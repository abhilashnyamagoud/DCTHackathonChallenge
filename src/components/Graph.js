import React from 'react';
import Chart from "react-google-charts";
import {useSelector} from 'react-redux';

const Graph=(props)=>{
const data1=useSelector(state=>state.students)
const result=Object.keys(data1).map((key)=>[ key,data1[key]])
console.log(result)
// const value= Object.entries(data1)
const header=[['Student Name','No Of Comments']]
const chartData=[]
  for(let i=0; i<result.length; i++){
    console.log(result[i])
    chartData.push(result[i])
  }
  const chart=[...header,...chartData]
    return(
        <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}

  data={chart}
 
  options={{
    title: 'My Daily Activities',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
    )
}

export default Graph