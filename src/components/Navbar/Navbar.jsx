import React from 'react'
import './Navbar.css'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'> 
      <div className="navbar-left">
      <p>Logo</p>
      </div>
      <div className="navbar-center">
      <ul>
          <li>Inicio</li>
          <li>Sobre Nós</li>
          <li>Farmacovigilancia</li>
          <li>Legislação e Documentos</li>
          <li>Contactos</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
      </div>
    </div>
  )
}

export default Navbar
