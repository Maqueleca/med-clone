import React from 'react'
import './destaque.css'
import noti2 from '../../assets/noti2.jpg'
import noti1 from '../../assets/noti1.jpg'
import noti3 from '../../assets/noti3.jpeg'
import clock from '../../assets/clock.png'

const Destaque = () => {
  return (
    <div className='destaque'>
      <p>Destaque</p>
      <div className="corpo3">
            <div className="item1">
                <div className="detalhe1">
                    <img src={noti3} alt="" />
                </div>
                <h3>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </h3>
                <div className="data1"><img src={clock} alt="" /><p>22-12-2024</p></div>
            </div>

            <div className="item1">
                <div className="detalhe1">
                    <img src={noti3} alt="" />
                </div>
                <h3>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </h3>
                <div className="data1"><img src={clock} alt="" /><p>22-12-2024</p></div>
            </div>
            <div className="item1">
                <div className="detalhe1">
                    <img src={noti3} alt="" />
                </div>
                <h3>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </h3>
                <div className="data1"><img src={clock} alt="" /><p>22-12-2024</p></div>
            </div>
   
        </div>
    </div>
  )
}

export default Destaque
