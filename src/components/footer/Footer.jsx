import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EMIR</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='hhtps://instagram.com'><FiInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; EMIR. All rights reserved</small>
      </div>
    </footer>
  
  )
}

export default Footer