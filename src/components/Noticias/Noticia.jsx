import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Noticia.css'
import AfroStyles from "./dataSlider"
import clock from '../../assets/clock.png'

const Noticia = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000, 
    };
    
  return (
<div className="content">
  <h1 className="header">Noticias</h1>
  <div className="container">
    <Slider {...settings}>
      {AfroStyles.map((item) => (
        <div key={item.id}>
          <div className="img-body">
            <img src={item.src} alt={item.alt} />
            <p>{item.description}</p>
            <div className="data1">
                <img src={clock} alt="" />
                <p>22-12-2024</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>
  )
}

export default Noticia