import React from 'react'
import '../../components/main.css'
import RankingSlider from './RankingSlider'

function Ranking() {
  return (
    <div className='ranking-main'>
        <div className='ranking-titulo'>
            <h3 className='ranking-titulo-sub'>
                Ranking de los streamers más seguidos en colombia
            </h3>
        </div>        
        <div className='ranking-seccion-slider'>
            <RankingSlider/>
        </div>
    </div> 
  )
}

export default Ranking