import React from 'react'
import './Footer.css'
import armed from '../../assets/armed.png'
import minsa from '../../assets/minsa.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-icons">
<img src={minsa} alt="" />
<img src={armed} alt="" />
</div>
<div className="direito">
    <div className="icons">
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
    </div>
    <div className="texto">
        <p>Tel. (+244) 945 817 227 | E-maail: armed@cnp.ao</p>
        <p>expediente@armed.gov.ao | www.armed.cnp.ao</p>
        <p>Rua Cmdt. Cge-Guevara Nº 86/86A,</p>
        <p>Maculusso, Luanda - Angola</p>
        <p>Regras, Politicas e Serviços</p>
    </div>
</div>
</div>
  )
}

export default Footer
