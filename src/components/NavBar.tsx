import '../styles/components/navBar.scss'
import RoundedButton from './RoundedButton'
import { Link } from 'react-router-dom'

export default function NavBar(){
  return(
        <>
           <nav className='nav'>
             <Link className='logo' to='/'>Logo</Link>

             <div className='nav-links'>
                <div className='navLink'>Plaform</div>
                <div className='navLink'>About</div>
                <div className='navLink'>Services</div>
                <div className='navLink'>Pricing</div>
             </div>

             <div className='login-btns'>
               <RoundedButton children='Log in' route='userRole/login' 
               
               />
               
             </div>
           </nav>
        </>
    )
}