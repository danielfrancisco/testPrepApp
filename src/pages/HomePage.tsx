import NavBar from '../components/NavBar'
import RoundedButton from '../components/RoundedButton'
import '../styles/pages/homePage.scss'


export default function HomePage(){
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
            <RoundedButton children="GET STARTED!" variant='secondary' size='large' 
            route='/userRole/create-account'/>
            
          </div>

          </div>
        </>
    )
}