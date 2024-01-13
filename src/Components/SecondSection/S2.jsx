import React from 'react'
import Natural from './../../assets/images/e1.png'
import Cities from './../../assets/images/e2.png'
import './S2.css'

const S2 = () => {
  return (
    <div className='s2'>
        <div className='s2bg' style={{backgroundImage: `url(${Natural})`}}>
            <p className='s2title'>Promotion</p>
            <h1 className='s2bigTitle'>Explore Nature</h1>
            <button>View Packages</button>
        </div>
        <div className='s2bg' style={{backgroundImage: `url(${Cities})`}}>
            <p className='s2title'>Promotion</p>
            <h1 className='s2bigTitle'>Explore Cities</h1>
            <button>View Packages</button>
        </div>
    </div>
  )
}

export default S2;