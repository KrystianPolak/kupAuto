import React from 'react'
import './user-info.css';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import CallIcon from '@mui/icons-material/Call';

const UserInfo = () => {
  return (
    <>
    <div className='user-info'>
        <h1 className='user-info__heading'>imie</h1>
        <span className='user-info__user-type'><PersonIcon></PersonIcon>osoba prywatna</span>
        <span className='user-info__location'><PlaceIcon></PlaceIcon>Warszawa</span>
        <button className='user-info__btn'><MapsUgcIcon></MapsUgcIcon>Napisz wiadomość</button>
        <button className='user-info__btn'><CallIcon></CallIcon>Wyswietl nr tel</button>
    </div>
    </>
  )
}

export default UserInfo