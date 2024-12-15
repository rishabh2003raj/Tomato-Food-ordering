import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
      <div className='footer' id='footer'>
          <div className="footer-content">
              <div className="footer-content-left">
                  <img src={assets.logo} alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iusto vel unde quia porro provident dignissimos aliquid nostrum accusantium itaque, totam quae! Praesentium quas, a et accusamus magni provident minus?</p>
                  <div className='footer-social-items'>
                      <img src={assets.facebook_icon} alt="" />
                      <img src={assets.twitter_icon} alt="" />
                      <img src={assets.linkedin_icon} alt="" />
                  </div>
               </div>
              <div className="footer-content-center">
                  <h2>Company</h2>
                  <ul>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Delivery</li>
                      <li>Privacy Policy</li>
                  </ul>
              </div>
              <div className="footer-content-right">
                  <h2>Get in Touch</h2>
                  <ul>
                      <li>78687r68r7634</li>
                      <li>gfuyeggere</li>
                  </ul>
              </div>
          </div>
          <hr />
          <p className='footer-copyright'>Copyright 2024 @ Tomato.com</p>
      </div>
    );
  }
  
  export default Footer;