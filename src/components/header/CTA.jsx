import React from 'react'
import CV from '../../assets/emir_husain_resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="https://www.linkedin.com/in/emir-husain-79555624a/" className='btn btn-primary'>Let's Talk</a> 
    </div>
  )
}

export default CTA