import React from 'react'
import './Hero.css'

const Hero = ({heroBg,heroTitle,fontYester}) => {
  return (
    <div className='hero' style={{backgroundImage: `url(${heroBg})`}}>
        <p className={(fontYester)? 'heroYester' : 'heroTitle' }>{heroTitle}</p>
    </div>
  )
}

export default Hero