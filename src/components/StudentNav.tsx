import {useState } from "react"
import "../styles/components/studentNav.scss"
import RoundedButton from "./RoundedButton"
import { useNavigate } from "react-router-dom"

//navigation bar for student main page
const logoUrl = 'https://img.freepik.com/free-vector/quill-pen-logo-template_23-2149852429.jpg?semt=ais_hybrid&w=740'
export default function StudentNav(){
  const[logo ,setLogo] = useState(logoUrl)
  const[primaryColor, setPrimaryColor] = useState('')

  const navigate = useNavigate()
   
   function logOut(){
       //remove credentials and go home page
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        localStorage.removeItem('role');
        navigate(`/`);
    }

    function goToHomePage(){
      navigate('/')
    }
  
    return(
        <>
          <div className="stundetNav" style={{backgroundColor:primaryColor}}>
            <img alt="logo" src={logo} onClick={goToHomePage}/>
             <h4 onClick={goToHomePage}>Home Page</h4>
            <h4>DashBoard</h4>
            <RoundedButton children='Log out' size="small" action={logOut}/> 
          </div>
        </>
    )
}

