import React from 'react';
import '../../components/main.css';
import ImagenUser from '../../assets/img/Imagen-prueba.jpg';
import { XYPlot, LineMarkSeries, XAxis, YAxis } from 'react-vis';

function DashCardDatos() {
  const data = [
    { x: 0, y: 1 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 }
  ];
  
  const data1 = [
    { x: 0, y: 6 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 5 },
    { x: 4, y: 1 },
    { x: 5, y: 4 },
    { x: 6, y: 7 },
    { x: 7, y: 1 },
    { x: 8, y: 2 },
    { x: 9, y: 0 }
  ];

  return (
    <div className=''>
      <div className="dash-card-datos">
        <div className="dash-datos-header">
          <img src={ImagenUser} className="dash-header-image" alt="User" />
          <div className="dash-card-overlay"></div>
          <p className='dash-datos-title'><i>Datos y estadísticas con <strong>machine learning e inteligencia artificial</strong></i></p>
        </div>
        <div className="chart-container">
        <XYPlot width="400" height={300}>
          <XAxis style={{ line: { stroke: 'white' }, ticks: { stroke: 'white' }, text: { fill: 'white' } }} />
          <YAxis style={{ line: { stroke: 'white' }, ticks: { stroke: 'white' }, text: { fill: 'white' } }} />
          <LineMarkSeries
            data={data}
            style={{ strokeLinejoin: "round" }}
          />
          <LineMarkSeries
            data={data1}
            style={{ strokeLinejoin: "round" }}
          />
        </XYPlot>

        </div>
      </div>
    </div>
  );
}

export default DashCardDatos;
