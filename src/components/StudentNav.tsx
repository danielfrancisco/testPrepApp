import "../styles/components/studentNav.scss"
import RoundedButton from "./RoundedButton"
import { useNavigate } from "react-router-dom"
import StylingPreferences from "../appConfig/StylingPreferences.json"

//navigation bar for student main page
export default function StudentNav(){
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
          <div className="stundetNav" style={{backgroundColor:StylingPreferences.primaryColor}}>
            <img alt="logo" src={StylingPreferences.logo} onClick={goToHomePage}/>
             <h4 onClick={goToHomePage}>Home Page</h4>
            <h4>DashBoard</h4>
            <RoundedButton children='Log out' size="small" action={logOut}/> 
          </div>
        </>
    )
}

