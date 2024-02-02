import React from 'react'
import './about.css'
import Image from './../../assets/images/beautyguzelliksalonu.jpg'
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function About() {
  return (
    <div>
        <div className="about">
            <div className="content">
                <p className='name'> Hi 👋🏼! I am <span>Ahun Atajanov</span> <span>Software Developer</span></p>
                <p className='desc'>I am a passionate Software Developer 🚀 from Egypt 🇪🇬. with more than 3 years experience delivering tech solutions, avid programmer and fast learner, obsessed with details and quality, always trying to improve development process and code quality, I love simple and elegant solutions for every problem.</p>
                <p className='button'>view resume</p>
                <div className='social-icons'>
                  <div>
                    <a href="" target="_blank">
                      <TwitterIcon sx={{ color: 'white'}} />
                    </a>
                  </div>
                  <div>
                    <a href="" target="_blank">
                      <TelegramIcon sx={{ color: 'white' }}  />
                    </a>
                  </div>
                  <div>
                    <a href="" target="_blank">
                      <GitHubIcon sx={{ color: 'white' }}  />
                    </a>
                  </div>
                  <div>
                    <a href="" target="_blank">
                      <InstagramIcon sx={{ color: 'white' }}  />
                    </a>
                  </div>
                </div>
            </div>
            <div className="image">
              <img src={Image} alt="owner image"  />
            </div>
        </div>
    </div>
  )
}

export default About