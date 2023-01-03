import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Reactjs</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Vuejs</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Nextjs</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Chakra</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Material-UI</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Ant-Design</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Redux</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>ui8</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience