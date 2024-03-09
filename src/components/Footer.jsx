import React from 'react'
import './css/Footer.css'
import phone from '../assets/phone_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'
import instagram from '../assets/instagram_icon.png'
import pinterest from '../assets/pinterest_icon.png'

export default function   Footer() {
  return (
    <div className='footer' >
        <div className="footer-container">
            <div className="contact">
                <h5>CONTACT</h5> <br /> <br />
                <address>
                <p>N0. 302, Abdul Salam Building, <br /> <br /> Al Murra.</p> <br /> 
                <p>U.A.E</p> <br />
                <p>(234)903941781</p>
                </address>
            </div>
            <div className="sources">
                <h5>SOURCES</h5> <br /> <br />
                <p>Contact</p> <br />
                <p>About Us</p> <br />
                <p>Designs</p> <br />
                <p>Servics</p> <br />
                <p>Terms</p>

            </div>
            <div className="socials">
                <h5>LINKS</h5> <br /> <br />
                <p>Our Vision</p> <br />
                <p>Contact Us</p> <br />
                <p>About Us</p> <br />
              <div className="social-icon">
                <p><img src={instagram} alt="" /></p>
                <p><img src={whatsapp} alt="" /></p>
                <p><img src={pinterest} alt="" /></p>
                <p><img src={phone} alt="" /></p> 
              </div>

            </div>

        </div>
    </div>
  ) 
}
