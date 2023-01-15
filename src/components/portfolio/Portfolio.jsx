import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Holiday-Challenge',
    github: 'https://github.com/Sodeeqishola5/Holiday-Challenge',
    demo: 'https://exam-new-feature.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Travel Advisor',
    github: 'https://github.com/Sodeeqishola5/Travel-Advisor',
    demo: 'https://travel-consultant-app.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Cryptocurrency-App',
    github: 'https://github.com/Sodeeqishola5/Cryptocurrency-App',
    demo: 'https://cryp-app.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'GPT-3',
    github: 'https://github.com/Sodeeqishola5/GPT-3-App',
    demo: 'https://gpt-3-app-ecru.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Restauprant-App',
    github: 'https://github.com/Sodeeqishola5/GERICHT-APP',
    demo: 'https://gericht-app-peach.vercel.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Calculator-App',
    github: 'https://github.com/Sodeeqishola5/calc-app',
    demo: 'https://react-npeo4u.stackblitz.io'
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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