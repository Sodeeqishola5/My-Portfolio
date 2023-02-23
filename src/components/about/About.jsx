import React from 'react'
import './About.css'
import ME from '../../assets/about-img.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BiFolderOpen} from 'react-icons/bi'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Client</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className="about__card">
              <BiFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>40+ Completed Projects</small>
            </article>
          </div>
            <p>
               I am a software engineer and technical writer with an extensive understanding of open-source, blockchain, software products, and server-less technologies, and a passionate speaker in these areas. Over the years, I have a solid technical background and experience working closely with developers to understand their needs and challenges. Proficient in advanced development methodologies and tools, focusing on driving the adoption of web3 technologies. Skilled in building relationships with key stakeholders, including developers, engineers, and product managers, and leading strategic initiatives with influential teams and individuals.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About