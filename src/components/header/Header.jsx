import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/img1_main.png'
import HeaderSocial from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5 allign="center">Hello I'm</h5>
        <h1>Emir Husain</h1>
        <h5 className="text-light"><span>Web Developer | Game Developer | Software Developer | Discord Bot Developer</span></h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
            <img src={ME} height= "550px" alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header