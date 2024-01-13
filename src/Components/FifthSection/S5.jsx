import React from 'react'
import './S5.css'
import video from './../../assets/images/video-play.svg'
import s5bg from './../../assets/images/video-banner.png'

const S5 = () => {
  return (
    <div className='s5' style={{backgroundImage:`url(${s5bg})`}}>
        <h1 style={{zIndex:2}}>
        Wanderlust
        </h1>
        <img src={video} alt="video" style={{zIndex:3, position:'absolute'}}/>
    </div>
  )
}

export default S5