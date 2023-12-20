import React from 'react'
import './about.css'
import ME from '../../assets/img1_no.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id = 'about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} height="500px" width="500px" alt="About Image" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>  
              </article>
            
              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Team Work</h5>
                <small>Mastering</small>  
              </article>

              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Projects</h5>
                <small>10+ Completed</small>  
              </article>
            </div>
            <p>
            As a versatile developer with expertise in Java, Python, C, C++, Blueprints, MySQL, HTML/CSS and Aoi.js, I am capable of delivering solutions for a variety of digital projects. With experience in web development, Discord bot development, Android app development, Project building and Game development, I have a track record of delivering high-quality results that meet expectations. Whether it's building robust system design, creating engaging user interfaces, or developing algorithms, I have the skills and knowledge to get the task accomplished. As a research oriented individual, I am committed to gain knowledge from intellectuals who appreciates the beauty of learning.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About