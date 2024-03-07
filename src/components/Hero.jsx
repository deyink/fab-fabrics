import React from 'react';
import './css/Hero.css'
import vid from '../assets/hero-vid.mp4'
import vid2 from '../assets/hero_vid.mp4'

const Hero = ()=>{
    return(
        <div className="hero-container">
            
            <video autoPlay loop muted id='video' src={vid}></video>

            <div className="hero-text">
                <p>WE OFFER NOT ONLY FABRICS BUT LUXURY</p>
            </div>
            <div className="shop-btn">
                <button className='btn' > SHOP NOW</button>
            </div>
           

     
        </div>
    )
}

export default Hero
