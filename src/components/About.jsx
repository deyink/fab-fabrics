import React from 'react'
import './css/About.css'
import about_img from '../assets/about_img.jpg'

export default function About() {
  return (
    <div className='about' >
        <div className="about-container">
            <div className="right-float">
                <img className='img' src={about_img} alt="" />
            </div>
            <div className="left-float">
                <div className="about-text">
                    <h3>ABOUT US</h3>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil error recusandae aperiam velit voluptas sunt dignissimos provident dolorem porro aliquam, est esse id adipisci neque sed! Inventore eos omnis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugit perferendis repellendus, natus ipsum voluptate? Exercitationem recusandae accusamus, quam corrupti odio possimus nam quisquam facilis quasi unde blanditiis 
                 </p>
                 
                    <div className="shop-btn">
                <button className='btn' > SHOP NOW</button>
            </div>
            </div>
        </div>
    </div>
  )
}
