import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/emir-husain-79555624a/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Emir2099" target="_blank"><FaGithub/></a>
        {/* <a href="https://instagram.com" target="_blank"><BsInstagram/></a> */}
    </div>
  )
}

export default HeaderSocials