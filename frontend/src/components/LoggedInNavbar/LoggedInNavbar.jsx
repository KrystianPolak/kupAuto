import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo_przyciete.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import "./logged-in-navbar.css";
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../../api/auth';

const LoggedInNavbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const {logout} = useAuth();
    const navigate = useNavigate();
    const[loggedUserData, setLoggedUserData] = useState({username: ""});

    useEffect(() => {
      const loadLoggedUserData = async () => {
        try {
          const data = await fetchUserData();
          setLoggedUserData(data);
        } catch (error) {
          console.log('blad ladowania danych: ', error);
        }
      };

      loadLoggedUserData();
    }, []);

    console.log(fetchUserData());

    const handleLogout = (e) => {
        e.preventDefault(); 
        logout();
        navigate('/'); 
    };

  return (
    <>
    <header className="first-page__header">
      <Link to="/"> <img className="logo" src={logo} alt=""></img></Link>
       <div className='flex-links'>
         
         <div 
          className="user-icon-container"
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <div style = {{
            display: "flex",
            flexDirection: "column",
            textAlign: "center", 
            fontSize: "1.2em", 
            textTransform: "uppercase"
          }}>
          <PersonIcon className="user-icon" />
          <span style={{}}>{loggedUserData.username}</span>
          </div>
          {isMenuOpen && (
            <div className="dropdown-menu">
              <Link to="/profile">Mój Profil</Link>
              <Link to="/settings">Ustawienia</Link>
              <Link to="/" onClick={handleLogout} className="logout-link">
                Wyloguj się
              </Link>
            </div>
          )}
        </div>
        <Link to="/add-announcment" className="add-announcement">
         <FontAwesomeIcon icon={faPlus} className='fa-plus' /> 
             Dodaj ogłoszenie
         </Link>
     </div>
     </header>
     </>
  )
}

export default LoggedInNavbar