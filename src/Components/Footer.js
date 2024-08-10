import React from 'react'
import logo from '../logo.svg'
export default function Footer() {
  return (
        <div class="footer">
            <div class="footer-content">
                <div class="footer-logo">
                 <img src={logo} alt="logo" draggable="false" />
                    
                </div>            
                <ul>
                    <li href="#"><i className="icon fa-brands fa-facebook-f fa-1x"></i></li>
                    <li href="#"><i className="icon fa-brands fa-twitter fa-1x"></i></li>
                    <li href="#"><i className="icon fa-brands  fa-google-plus fa-1x"></i></li>
                    <li href="#"><i className="icon fa-brands  fa-instagram fa-1x"></i></li>
                    <li href="#"><i className="icon fa-brands  fa-linkedin fa-1x"></i></li>
                    <li href="#"><i className="icon fa-brands  fa-youtube fa-1x"></i></li>
                </ul>
                <div class="copywrite">
                 <div>copyright © 2024.all rights reserved.designed by <span>Mahmoud Ashraf</span></div>
                </div>
            </div>
        </div>
  )
}
