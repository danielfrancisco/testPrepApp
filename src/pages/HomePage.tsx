import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import RoundedButton from '../components/RoundedButton'
import '../styles/pages/homePage.scss'
import { useNavigate } from 'react-router-dom'
import { useConditionalRedirect } from '../customHooks/useConditionalRedirect'

export default function HomePage(){
  const navigate= useNavigate()
  const shouldRender = useConditionalRedirect();
  
  if (!shouldRender) return null;
    return(
        <>
          <NavBar/>
          <div className='homePageContent'>
          <h1 className='headerHomePage'>Amplify your potential with 
           Ai Powered learning
          </h1>

          <p className='descriptionHomePage'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className='registerButtons'>
            <RoundedButton children="Get Started!" variant='secondary' size='large' 
            route='/userRole/create-account'/>
            
          </div>

          </div>
        </>
    )
}