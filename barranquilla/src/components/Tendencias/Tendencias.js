import React from 'react'
import '../../components/main.css'
import NoticiasCards from '../Noticias/NoticiasCards';

function tendencias() {
  return (
    <div className='tendencias-main'> 
        <div className='noticias-text-title'>
            Tendencias, storys y, una plataforma gamer para la industria
        </div>
        <div className='noticias-opciones'>
            <div className='noticias-cards'>
                <div className='noticias-cards-1'>
                    <div className='noticias-cards-espacio'>
                        <NoticiasCards/>
                    </div>
                    <div className='noticias-cards-state-2'>
                        <p className='noticias-cards-text-1'>
                            Un juego prometedor que la rompe toda
                            <div className='noticias-cards-descripcion'>
                                Esta es la historia de como un pequeño estudio hace milagros con un presupuse reducido... 
                            </div>
                        </p>
                    </div>
                </div>
                <div className='noticias-cards-2'>
                    <div className='noticias-cards-espacio'>
                        <NoticiasCards/>
                    </div>
                    <div className='noticias-cards-state-2'>                        
                        <p className='noticias-cards-text-2'>
                            El mando que todos ODIAN, pero aman al mismo tiempo
                            <div className='noticias-cards-descripcion'>
                                Documental detrás del diseño más icónico de las consolas...
                            </div>
                        </p>
                    </div>
                </div>
                <div className='noticias-cards-3'>
                    <div className='noticias-cards-espacio'>
                        <NoticiasCards/>
                    </div>
                    <div className='noticias-cards-state-2'>
                        <p className='noticias-cards-text-3'>
                            Los hilos que manejan la industria triple AAA
                            <div className='noticias-cards-descripcion'>
                                Todo una jerarquía detrás de la industria multimillonaria de los juegos AAA....
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default tendencias