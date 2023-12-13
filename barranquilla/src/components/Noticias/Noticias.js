import React from 'react'
import '../../components/main.css'
import NoticiasCards from '../Noticias/NoticiasCards';

function noticias() {
  return (
    <div className='noticias-main'> 
        <div className='noticias-text-title'>
            Últimas novedades en Game Trends 360
        </div>
        <div className='noticias-opciones'>
            <div className='noticias-cards'>
                <div className='noticias-cards-1'>
                    <div className='noticias-cards-espacio'>
                        <NoticiasCards/>
                    </div>
                    <div className='noticias-cards-state-1'>
                        <p className='noticias-cards-text-1'>
                            Próximos eventos...
                        </p>
                    </div>
                </div>
                <div className='noticias-cards-2'>
                    <div className='noticias-cards-espacio'>
                        <NoticiasCards/>
                    </div>
                    <div className='noticias-cards-state-1'>                        
                        <p className='noticias-cards-text-2'>
                            Gameloft vende un 5% de sus acciones...
                        </p>
                    </div>
                </div>
                <div className='noticias-cards-3'>
                    <div className='noticias-cards-espacio'>
                        <NoticiasCards/>
                    </div>
                    <div className='noticias-cards-state-1'>
                        <p className='noticias-cards-text-3'>
                            Microsoft adquiere Activision por una cifra record....
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default noticias