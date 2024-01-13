import React from 'react'
import './S4.css'

const S4 = ({sectionTitle,selectionBig,sectionDescreption,promotion,btn}) => {
  return (
    <div className='s4'>
        <div className='s4infos'>
        <p className='sectionTitle'>{sectionTitle}</p>
        <h1 className='s4title'>{selectionBig}</h1>
        <p className='sectionDescreption'>{sectionDescreption}</p>
        <button>{btn}</button>
        </div>
        <div>
            <img src={promotion} alt="promotion" />
        </div>
    </div>
  )
}

export default S4