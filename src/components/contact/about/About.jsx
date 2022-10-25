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
               Here's a quick summary about me:<br/>
               Pronouns: He/him<br/>
               I’m currently learning html, css, JavaScript and Reactjs.<br/>
               I'm currently studying at AltSchool Africa School of Software Engineering Class of 2022. <br/>
               I’m looking for help with open source projects, hackathons, internships, and entry-level opportunities.<br/>
               Job interests: Software Engineer, Front Engineer, or UI Engineer (Intern or Junior level).<br/>
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About