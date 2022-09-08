import React from 'react'
import {FaFacebook, FaTwitter, FaEnvelope} from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="footer-container">

        <div className="organization footer-column">
            <h5>KYCCWIC 2023</h5>
            <div className="footer-logo-container">
                <a href="/" className="footer-logo-link"><img className="footer-logo-image" src={require('./assets/logo.png')} alt="KYCC Logo" /></a>
                <a href="https://www.acm.org" className="footer-logo-link" target='_blank' rel="noreferrer"><img className="footer-logo-image" src={require('./assets/acm-w-logo-transparent.png')} alt="ACM-W Logo" /></a>
                <a href="https://southcentral.kctcs.edu/" className="footer-logo-link" target='_blank' rel="noreferrer"><img className="footer-logo-image" src={require('./assets/skyctc-logo-blue.png')} alt="SKYCTC Logo" /></a>
            </div>
        </div>

        <div className="page-navigation footer-column">
            <h5>Navigation</h5>
            <ul className="footer-nav-menu">
                <li className="footer-nav-item"><a className="footer-nav-link" href="/">Home</a></li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#about">About</a></li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#sponsors">Sponsors</a></li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#register">Register</a></li>
            </ul>
        </div>

        <div className="contact-us footer-column">
            <h5>Contact Us</h5>
            <p className="sub-title">Event Coordinator</p>
            <a className="footer-email" href="mailto:carmen.gaskins@kctcs.edu"><FaEnvelope className="footer-email-icon"/> Carmen Gaskins</a>
            
            <p className="sub-title">Social Media</p>
            <div className="footer-social-icon-div">
                <a className="footer-social-icon" href="https://www.facebook.com/groups/1162883927542419" target='_blank' rel="noreferrer"><FaFacebook/></a>
                <a className="footer-social-icon" href="https://twitter.com/KyccIn" target='_blank' rel="noreferrer"><FaTwitter/></a>
            </div>
            
        </div>

      </div>
      <div className="footer-bottom">
        <div className="footer-container">
            <p>All Rights Reserved &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
