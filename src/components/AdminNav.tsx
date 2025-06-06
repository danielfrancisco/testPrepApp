import { useState } from "react"
import "../styles/components/adminNav.scss"
import RoundedButton from "./RoundedButton"
import { useNavigate } from "react-router-dom"

//navigation bar for admin main page
const logoUrl = 'https://img.freepik.com/free-vector/quill-pen-logo-template_23-2149852429.jpg?semt=ais_hybrid&w=740'
export default function AdminNav(){
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
  
    return(
        <>
          <div className="admintNav" style={{backgroundColor:primaryColor}}>
            <img alt="logo" src={logo}/>
            <RoundedButton children='Log out' size="small" action={logOut}/> 
          </div>
        </>
    )
}

