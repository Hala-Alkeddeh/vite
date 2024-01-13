import React from 'react'
import './S1.css'

const S1 = ({sectionTitle,selectionBig,cards}) => {
  return (
    <div className='s1'>
        <p className='sectionTitle'>{sectionTitle}</p>
        <h1 className='selectionBig'>{selectionBig}</h1>
        <div className="container">
            {cards}
        </div>
    </div>
  )
}

export default S1