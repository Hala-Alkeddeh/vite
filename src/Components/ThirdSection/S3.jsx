import React from 'react'
import './S3.css'

const S3 = ({sectionTitle,selectionBig,cards}) => {
  return (
    <div className='s3'>
        <p className='sectionTitle'>{sectionTitle}</p>
        <h1 className='selectionBig'>{selectionBig}</h1>
        <div className="container3">
            {cards}
        </div>
    </div>
  )
}

export default S3