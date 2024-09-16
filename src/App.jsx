import { useState } from 'react'
import { 
   Route, 
   createBrowserRouter, 
   createRoutesFromElements, 
   RouterProvider} from 'react-router-dom'
import './App.css'
import './Reset.css'
import HomePage from './pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import CorePage from './pages/CorePage'
import Login from './pages/LoginPage'
import Signup from './pages/SignupPage'


const router = createBrowserRouter(
   createRoutesFromElements(
   <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path='/core' element={<CorePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/sign-up' element={<Signup/>} />
   </Route>
   )
);

function App() {
  

  return <RouterProvider router={router}/>;
}

export default App

