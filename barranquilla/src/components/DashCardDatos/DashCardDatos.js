import React, { useRef, useEffect, useState } from 'react';
import '../../components/main.css';
import ImagenUser from '../../assets/img/Imagen-prueba.jpg';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 200, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 278, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 189, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 239, pv: 4800, amt: 2400 },
  { name: 'Page G', uv: 349, pv: 3800, amt: 2400 },
];

function DashCardDatos() {
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

  return (
    <div className=''>
      <div ref={chartContainerRef} className="dash-card-datos"> {/* Contenedor padre */}
        <div className="dash-datos-header">
          <img src={ImagenUser} className="dash-header-image" alt="User" />
          <div className="dash-card-overlay"></div>
          <p className='dash-datos-title'><i>Datos y estadísticas con <strong>machine learning e inteligencia artificial</strong></i></p>
        </div>
        <LineChart width={chartWidth} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
}

export default DashCardDatos;
