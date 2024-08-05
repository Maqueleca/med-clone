import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import home1 from '../../assets/home.jpg'
import home2 from '../../assets/home2.jpg'
import home3 from '../../assets/home3.jpg'
import Card from '../../components/Cards/Card';
import Noticia from '../../components/Noticias/Noticia';
import Marcar from '../../components/Marcar/Marcar';
import Destaque from '../../components/Destaque/Destaque';
import Footer from '../../components/Footer/Footer';
import Slide from '../../components/Slider/Slide';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={home2} alt="" className='banner-img' />
      </div>
      <div className="corpo">
        <Card />
      </div>
          
      <div className='noti'>
        <Noticia />
        <Marcar />
        </div> 
          <Slide />

      <Footer />     
   </div>
  )
}

export default Home
