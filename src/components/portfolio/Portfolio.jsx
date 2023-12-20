import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG5,
    title: 'IPR Quest, an open world game created in view of VITSIH hackathon 2023, providing information regarding intellectual property rights (UE 5.0.3)',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1auEhac0mdV_YiZ4EA1_zuw6ucSHDEAYv/view?usp=drive_link'
  },
  {
    id: 3,
    image: IMG2,
    title: 'Adventure Odessey, stylized graphics parkour based game with single player controller(UE 5.0.3)',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1ZrF1s2Q8UlxnPQvyz8ZaMzzDNLCAesWG/view?usp=drive_link'
  },
  {
    id: 4,
    image: IMG3,
    title: 'Dead Front, zombie fps game with AI driven enemy and single-gun system (UE 5.0.3)',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1ExuP4aJEZyySKMcJOOdNw06pBxYkkFpi/view?usp=drive_link'
  },
  {
    id: 2,
    image: IMG1,
    title: 'RPG based game project with detailed user interaction, multi weapon system and inventory database (UE 5.0.3)',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1yfk3kbcBrlAw8PXokaCvAlP50R4uFPBo/view?usp=drive_link'
  },
]

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.flatMap(({id, image, title, github, demo}) => {
            return (
              <article key= {id} className="portfolio__item">
              <div className="portflio__item-image">
                <img src={image} alt={title} height="174px"/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {/* <a href={github} className="btn">Github</a> */}
                <a href={demo} className="btn btn-primary" target='_blank'>Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio