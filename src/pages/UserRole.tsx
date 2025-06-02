import "../styles/pages/userRole.scss"
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';



export default function UserRole(){
  const navigate = useNavigate()   
  const {action} = useParams()
  
    function handleClick(role:string){
       navigate(`/${action}/${role}`)
   }

    return(
        <>
          
          <div className="userRoleContainer">
            <h1>I'm a</h1>
            <div className="userRoleOptions">
            <div onClick={()=>{handleClick('student')}}>Student</div>
            <div onClick={()=>{handleClick('teacher')}}>Teacher</div>
            </div>
          </div>
        </>
    )
}
