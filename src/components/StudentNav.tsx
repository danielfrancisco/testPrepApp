import {useState } from "react"
import "../styles/components/studentNav.scss"
import RoundedButton from "./RoundedButton"

//navigation bar for student main page
const logoUrl = 'https://img.freepik.com/free-vector/quill-pen-logo-template_23-2149852429.jpg?semt=ais_hybrid&w=740'
export default function StudentNav(){
  const[logo ,setLogo] = useState(logoUrl)
  const[primaryColor, setPrimaryColor] = useState('')
   
   function logOut(){
       
    }
  
    return(
        <>
          <div className="stundetNav" style={{backgroundColor:primaryColor}}>
            <img alt="logo" src={logo}/>
            <RoundedButton children='Log out' size="small" action={logOut}/> 
          </div>
        </>
    )
}

