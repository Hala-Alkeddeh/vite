import React from 'react'
import './S6.css'

const S6 = ({s6img,sectionTitle,selectionBig,sectionDescreption}) => {
  return (
    <div className='s6'>
        <img src={s6img} alt="" />
        <div className='s6container'>
            <div className='s4infos'>
                <p className='sectionTitle'>{sectionTitle}</p>
                <h1 className='s4title'>{selectionBig}</h1>
                <p className='sectionDescreption'>{sectionDescreption}</p>
            </div>
            <div  className='numbersContainer'>
                <div className='numbers'>
                    <p>78%</p>
                    <h2>Vacations</h2>
                </div>
                <div className='numbers'>
                    <p>55%</p>
                    <h2>Honeymoon</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default S6