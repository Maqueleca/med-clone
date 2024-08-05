import React from 'react'
import './marcar.css'
import downloading from '../../assets/downloading.png'
import Calendario from './Calendario'

const Marcar = () => {
  return (
    <div className='marcar'>
      <p>marcação de agenda</p>
      <button className="btn">
        <img src={downloading} alt="" />
        <p>Baixar manual</p>
    </button>
    <div className="calendario">
        <Calendario />
    </div>
    </div>
  )
}

export default Marcar
