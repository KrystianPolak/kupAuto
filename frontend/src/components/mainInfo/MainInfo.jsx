import React from 'react'
import './main-info.css';
import './top-info.css'
import UserInfo from '../userInfo/UserInfo';
import { advertisements } from '../Announcments';

const MainInfo = () => {

    const ad = advertisements[0];

  return (
    <>
    <div className='main-info'>
    <div className='top-info'>
    <h1 className='top-info__heading'>{ad.brand} {ad.model}</h1>
    <p className='car-info'>{ad.year} - {ad.mileage} - {ad.fuelType} - {ad.engineCapacity}</p>
    <span className='price'>{ad.price} PLN</span>
    </div>
    <UserInfo className='user-info'></UserInfo>
    </div>
    </>
  )
}

export default MainInfo