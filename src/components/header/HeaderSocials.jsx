import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/sideeq-ishola-5bab3a233/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/Sodeeqishola5" target="blank"><FaGithub/></a>
        <a href="https://twitter.com/Sideeq142621" target="blank"><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials