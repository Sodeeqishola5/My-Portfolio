import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Calculator-App',
    github: 'https://github.com/Sodeeqishola5/calc-app',
    demo: 'https://react-npeo4u.stackblitz.io'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Calculator-App',
    github: 'https://github.com/Sodeeqishola5/calc-app',
    demo: 'https://react-npeo4u.stackblitz.io'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Calculator-App',
    github: 'https://github.com/Sodeeqishola5/calc-app',
    demo: 'https://react-npeo4u.stackblitz.io'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Phonie-App',
    github: 'https://github.com/Sodeeqishola5/circle-19-phonie',
    demo: 'https://circle-19-phonie.apps-phonie.repl.co'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Phonie-App',
    github: 'https://github.com/Sodeeqishola5/circle-19-phonie',
    demo: 'https://circle-19-phonie.apps-phonie.repl.co'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Phonie-App',
    github: 'https://github.com/Sodeeqishola5/circle-19-phonie',
    demo: 'https://circle-19-phonie.apps-phonie.repl.co'
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