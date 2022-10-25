import React from 'react'
import './Testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'
import AVATAR5 from '../../assets/avatar5.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVATAR1,
    name: 'Gene Buckley',
    review: "Don’t try to tell the customer what he wants. If you want to be smart, be smart in the shower. Then get out, go to work and serve the customer!"
  },
  {
    avatar: AVATAR2,
    name: 'Sam Walton',
    review: "There is only one boss. The customer. And he can fire everybody in the company from the chairman on down, simply by spending his money somewhere else."

  },
  {
    avatar: AVATAR3,
    name: 'Ken Blanchard',
    review: "Just having satisfied customers isn’t good enough anymore. If you really want a booming business, you have to create raving fans."

  },
  {
    avatar: AVATAR4,
    name: 'Bill Gates',
    review: "Your most unhappy customers are your greatest source of learning."
  },
  {
    avatar: AVATAR5,
    name: 'Teddy Roosevelt',
    review: "People do not care how much you know until they know how much you care."
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
        
{data.map((dat,index) => (

            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={dat.avatar}/>
              </div>
              <h5 className="client__name">{dat.name}</h5>
              <small className="client__review">{dat.review}</small>
      
            </SwiperSlide>
))}
      
          
         
        
      </Swiper>
    </section>
  )
}

export default Testimonials