import React from 'react'
import './Card.css'

const Card = ({imgCard,titkeCard,desCard}) => {
  return (
    <div className='card'>
        <img src={imgCard}/>
        <p className='titkeCard'>{titkeCard}</p>
        <p className='desCard'>{desCard}</p>
    </div>
  )
}

export default Card