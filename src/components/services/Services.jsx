import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck/>
              <p>Interaction design principles.</p>
            </li>
            <li>
              <BiCheck/>
              <p>Branding, typography and color theory.</p>
            </li>
            <li>
              <BiCheck/>
              <p>Wireframing and prototyping.</p>
            </li>
            <li>
              <BiCheck/>
              <p>Style guides.</p>
            </li>
            <li>
              <BiCheck/>
              <p>User research and personas.</p>
            </li>
            <li>
              <BiCheck/>
              <p>Teamwork and communication skills.</p>
            </li>
            <li>
              <BiCheck/>
              <p>Key industry tools, including Sketch.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UE */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck/>
              <p>Your new website will be fully responsive</p>
            </li>
            <li>
              <BiCheck/>
              <p>look beautiful on all mobile for no extra cost</p>
            </li>
            <li>
              <BiCheck/>
              <p> Your business deserves professional website that is memorable</p>
            </li>
            <li>
              <BiCheck/>
              <p>uniquely designed</p>
            </li>
            <li>
              <BiCheck/>
              <p>Unlimited custom emails</p>
            </li>
            <li>
              <BiCheck/>
              <p>Unique attractive designs</p>
            </li>
            <li>
              <BiCheck/>
              <p>Mobile responsive</p>
            </li>
            <li>
              <BiCheck/>
              <p> Fast loading website</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck/>
              <p>Blog Writing</p>
            </li>
            <li>
              <BiCheck/>
              <p>Web Video Production</p>
            </li>
            <li>
              <BiCheck/>
              <p>Infographics and Motion Graphic Creation</p>
            </li>
            
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services