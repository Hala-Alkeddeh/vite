import React from 'react'
import './PackageCard.css'
import star2 from './../../assets/images/star_2.svg'

const PackageCard = ({packageImg,packageDate,packagePeople,packageCity,packageDesc,packageCost,packageStars}) => {
  return (
    <div className='packageCard'>
        <img src={packageImg} alt="city" />
        <div className="packagNumbers">
            <p>{packageDate}</p>
            <p>{packagePeople}+ People</p>
        </div>
        <div className='packageInfo'>
            <h1>{packageCity}</h1>
            <p>{packageDesc}</p>
            <div className='packageRate'>
                <p>{packageCost} $</p>
                <div className='starr'>
                    <img src={star2} alt="rate" />
                    <p>{packageStars}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PackageCard