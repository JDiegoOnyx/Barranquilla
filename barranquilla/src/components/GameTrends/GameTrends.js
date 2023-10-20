import React from 'react'
import '../../components/main.css'
import GTComponentGameTrends1 from '../GTGameTrends/GTComponentGameTrends1';
import GTComponentGameTrends2 from '../GTGameTrends/GTComponentGameTrends2';

function GameTrends() {
  return (
    <div className='gametrends-main'>
        <div className='gametrends-section-1'>
            Explora todas las posibilidades con Game Trends 360
        </div>
        <div className='gametrends-section-main'>
            <div className='gametrends-section-2'>
                <div className='gametrends-col-1'>
                    <GTComponentGameTrends1/>
                </div>
                <div className='gametrends-col-2'>
                    <GTComponentGameTrends2/> 
                </div>
            </div>
            <div className='gametrends-section-3'>
                <div className='gametrends-col-3'>
                    <GTComponentGameTrends2/>
                </div>
                <div className='gametrends-col-4'>
                    <GTComponentGameTrends1/>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default GameTrends