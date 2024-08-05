import React from 'react'
import './cards.css'
import i from '../../assets/i.png'
import agenda from '../../assets/agenda.png'
import renova from '../../assets/renova.png'
import autorizado from '../../assets/autorizado.png'

const Card = () => {
  return (
    <div>
      <p className='principal'>SERVIÇOS</p>
      <div className='card'>
      
      <div className="content">
        <img src={i} alt="" />
        <p>Informacão</p>
       </div>
       <div className="content">
        <img src={agenda} alt="" />
        <p>Agenda</p>
       </div>
       <div className="content">
        <img src={renova} alt="" />
        <p>Remarcação</p>
        
       </div>
       <div className="content">
        <img src={autorizado} alt="" />
        <p>Autorizado</p>
       </div>
      </div>
    </div>
  )
}

export default Card
