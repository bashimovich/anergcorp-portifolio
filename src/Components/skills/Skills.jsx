import React from 'react'
import { Carousel } from 'antd'
import './skills.css'
// img start 
import npm from './../../assets/images/npm.png'
import nodejs from './../../assets/images/nodejs.png'
import aws from './../../assets/images/aws.png'
import alpine from './../../assets/images/alpine.png'
import bash from './../../assets/images/bash.png'
import css from './../../assets/images/css.png'
import django from './../../assets/images/django.png'
import docker from './../../assets/images/docker.png'

// img end

function Skills() {
  return (
    <div>
    <Carousel autoplay autoplaySpeed={2000} infinite={true} className='custom-carousel'>
        <div className='custom-carousel-items'>
            <div  className='item'>
                <img src={npm} alt="" />
            </div>
            <div  className='item'>
                <img src={docker} alt="" />
            </div>
            <div  className='item'>
                <img src={django} alt="" />
            </div>
            <div  className='item'>
                <img src={bash} alt="" />
            </div>
            <div  className='item'>
                <img src={css} alt="" />
            </div>
        </div>
        <div className='custom-carousel-items'>
            <div  className='item'>
                <img src={aws} alt="" />
            </div>
            <div  className='item'>
                <img src={alpine} alt="" />
            </div>
            <div  className='item'>
                <img src={nodejs} alt="" />
            </div>
            <div  className='item'>
                <img src={bash} alt="" />
            </div>
            <div  className='item'>
                <img src={css} alt="" />
            </div>
        </div>
        <div className='custom-carousel-items'>
            <div  className='item'>
                <img src={npm} alt="" />
            </div>
            <div  className='item'>
                <img src={docker} alt="" />
            </div>
            <div  className='item'>
                <img src={django} alt="" />
            </div>
            <div  className='item'>
                <img src={bash} alt="" />
            </div>
            <div  className='item'>
                <img src={css} alt="" />
            </div>
        </div>
    </Carousel>
    </div>
  )
}

export default Skills