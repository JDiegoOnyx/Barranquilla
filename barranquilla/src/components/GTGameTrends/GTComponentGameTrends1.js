import React from 'react'
import '../../components/main.css'
import llamadoAction from '../../assets/img/llamadoAction.png';

function GTComponentGameTrends1() {
  return (
    <div class='gt-component1-main-container'>
        <div class='gt-component1-logo-container'>
            <img class='gt-component1-footer-logo-main' src={llamadoAction}/>  
        </div>
        <div class='gt-component1-text-container'>
            <div class='gt-component1-sub-text'>
                Sumérgete en el mundo del machine learning para
            </div>
            <div class='gt-component1-sub-text'>
                <span class='gt-component1-emphasis'>Videojuegos</span>
            </div>
            <div class='gt-component1-description-text'>
                Encuentra datos importantes, y descubre los proyectos más interesantes.
            </div>
        </div>
    </div>

  )


}

export default GTComponentGameTrends1
