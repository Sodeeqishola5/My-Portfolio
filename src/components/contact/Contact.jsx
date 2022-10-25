import React from 'react'
import './Contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8urmh6g', 'template_942shz3', form.current, 'yZT1mOrpw4JcFpMMy')
      e.target.reset()
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      };
      
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <TfiEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>isholasideeq@gmail.com</h5>
            <a href='mailto:isholasideeq@gmail.com' target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messanger</h4>
            <h5>Muritala Sideeq</h5>
            <a href='https://m.me/muritala.sideeq.9' target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+2348072651381</h5>
            <a href='https://api.whatsapp.com/send?phone+2348072651381' target="_blank">Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref= {form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your email" required/>
          <textarea name="message" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact