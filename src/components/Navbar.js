import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './assets/logo.png'
import acmlogo from './assets/acm-w-transparent-small.png'
// import skyctclogo from './assets/skyctc-logo-blue.png'
import './Navbar.css'


const Navbar = () => {
  const [navClick, setNavClick] = useState(false)
  const handleNavClick = () => setNavClick(!navClick)

  //change nav color when scroll
  const [navColor, setNavColor] = useState(false)
  const changeNavColor = () => {
    if (window.scrollY >= 100){
      setNavColor(true)
    } else {
      setNavColor(false)
    }
  }
  //window.addEventListener('scroll', changeNavColor)
  useEffect(() => {
    window.addEventListener('scroll', changeNavColor);
    return () => window.removeEventListener('scroll', changeNavColor);
  }, []);


  //Redirect registration button after registration closes
  const [disableRegistration, setDisableRegistration] = useState(false);
  useEffect(() => {
    //Change on March 2nd 20023 at 8:00 AM CST
    const targetDate = new Date("2023-03-02T08:00:00-06:00");
    const now = new Date();
    const disable = now >= targetDate;
    setDisableRegistration(disable);
  }, []);

  const registerButton = disableRegistration ? (
    <li className="nav-item">
      <a className='nav-button' href="#regclosed">Register</a>
    </li>
  ) : (
    <li className="nav-item">
      <a className='nav-button' href='https://www.surveymonkey.com/r/THWXYC8' target='_blank' rel="noreferrer">Register</a>
    </li>
  );

  return (
    <div className={navColor ? "header header-bg" : "header"}>
      <nav className="navbar">
        <div className="logos">
          <a href="/" className='logo'>
            <img src={logo} alt="logo" />
          </a>
          <a href="https://www.acm.org/">
            <img src={acmlogo} alt="ACM-W Logo" />
          </a>
          {/* <a href="https://southcentral.kctcs.edu/">
            <img src={skyctclogo} alt="SKYCTC Logo" />
          </a> */}
        </div>
        
        <div className="hamburger" onClick={handleNavClick}>
          {navClick ? 
            (<FaTimes size={30} style={{color: 'white'}}/>) 
            : (<FaBars size={30} style={{color: 'white'}}/>)
          }
        </div>
        
        <ul className={navClick ? "nav-menu active" : "nav-menu"}>
          
          {/* <li onClick={handleNavClick} className="nav-item"><a className='nav-link' href="/">Home</a></li> */}
          <li onClick={handleNavClick} className="nav-item"><a className='nav-link' href="#about">About</a></li>
          {/* <li onClick={handleNavClick} className="nav-item"><a className='nav-link' href="#event-committee">Event Committee</a></li> */}
          <li onClick={handleNavClick} className="nav-item"><a className='nav-link' href="#sponsors">Sponsors</a></li>
          {/* <li onClick={handleNavClick} className="nav-item"><a className='nav-link' href="#speakers">Speakers</a></li> */}
          <li onClick={handleNavClick} className="nav-item"><a className='nav-link' href="#agenda">Agenda</a></li>
          <li onClick={handleNavClick} className="nav-item"><a className='nav-link' href="#keynote">Speakers</a></li>
          <li onClick={handleNavClick} className="nav-item"><a className='nav-link' href="#careerfair">Career Fair</a></li>
          {/* <li onClick={handleNavClick} className="nav-item"><a className='nav-button' href='https://www.surveymonkey.com/r/THWXYC8' target='_blank' rel="noreferrer">Register</a></li> */}
          {registerButton}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
