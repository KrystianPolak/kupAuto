import React from 'react'
import logo from '../assets/images/logo_przyciete.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <header className="first-page__header">
      <Link to="/"> <img className="logo" src={logo} alt=""></img></Link>
       <div className='flex-links'>
         <Link to="" className="add-announcement">
         <FontAwesomeIcon icon={faPlus} className='fa-plus' /> 
             Dodaj ogłoszenie
         </Link>
         <Link className="login" to="/login">Zaloguj się/Zarejestruj się</Link>
     </div>
     </header>
     </>
  )
}

export default Navbar