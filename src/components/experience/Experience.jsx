import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id = 'experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
      <div className="experience__backend">
        <h3>Game Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Blueprint</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Game Design</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Level Design</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Story Creation</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Belnder</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Website Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Software Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>C++/C</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Basic</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>XML</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience