import React from 'react'
import Header from "./../Components/header/Header";
import About from '../Components/about/About';
import Skills from '../Components/skills/Skills';
import Projects from '../Components/projects/Projects';
import Footer from '../Components/footer/Footer';
import './home.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Home() {
  return (
    <div>
        <div className="container">
            <Header />
            <About/>
            <div className='skills-blog-title'>
              <ArrowDownwardIcon sx={{ fontSize: 36 }}/>
              <h1>I work with...</h1>
            </div>
            <Skills />
            <div className='skills-blog-title'>
              <h1>Projects</h1>
            </div>
            <Projects />
        </div>
        <Footer />
    </div>
  )
}

export default Home