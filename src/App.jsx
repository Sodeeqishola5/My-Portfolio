import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import { Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './index.css'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/#" element={<Header />} />
        <Route path="/#about" element={<About />} />
        <Route path="/#contact" element={<Contact />} />
        <Route path="/#experience" element={< Experience />} />
        <Route path="/#services" element={<Services />} />
      </Routes>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App