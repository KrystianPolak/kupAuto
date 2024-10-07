import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useAuth } from '../AuthContext';
import LoggedInNavbar from '../components/LoggedInNavbar/LoggedInNavbar';
const MainLayout = () => {

  const { isAuthenticated } = useAuth(); 
  return (
    <>
    {isAuthenticated ? <LoggedInNavbar /> : <Navbar />}
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default MainLayout