import React, { useRef, useEffect, useState } from 'react';
import '../../components/main.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: '', uv: 0, pv: 100, amt: 300 },
  { name: '2017', uv: 300, pv: 200, amt: 100 },
  { name: '2018', uv: 200, pv: 150, amt: 200 },
  { name: '2019', uv: 278, pv: 200, amt: 100 },
  { name: '2020', uv: 189, pv: 400, amt: 260 },
  { name: '2021', uv: 239, pv: 300, amt: 400 },
  { name: '2022', uv: 449, pv: 400, amt: 600 },
  { name: '2023', uv: 449, pv: 400, amt: 500 },
  { name: '',},
];


function Grafico() {
  const chartContainerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    const updateChartWidth = () => {
      if (chartContainerRef.current) {
        const width = chartContainerRef.current.clientWidth;
        setChartWidth(width);
      }
    };

    // Update width initially and on window resize
    updateChartWidth();
    window.addEventListener('resize', updateChartWidth);

    return () => {
      window.removeEventListener('resize', updateChartWidth);
    };
  }, []);


  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="custom-label">Lorem</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    }
  
    return null;
  };


  return (
    <div ref={chartContainerRef} className=''>
        <LineChart width={chartWidth} height={380} data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <Line type="linear" dataKey="uv" stroke="#8884d8" strokeDasharray="5 5"/>
          <Line type="linear" dataKey="pv" stroke="#DB1C00" strokeDasharray="5 5"/>
          <Line type="linear" dataKey="amt" stroke="#0778DB"/>
          
          <CartesianGrid stroke="none"/>
          <XAxis style={{ color:'#f5f5f5'}} stroke="#D8BBFF" dataKey="name" />
          <YAxis hide="boolean"/>
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
    </div>
  );
}

export default Grafico;
