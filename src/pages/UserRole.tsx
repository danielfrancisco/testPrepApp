import "../styles/pages/userRole.scss"
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useConditionalRedirect } from "../customHooks/useConditionalRedirect";

export default function UserRole(){
  const navigate = useNavigate()   
  const {action} = useParams()
  
    function handleClick(role:string){
       navigate(`/${action}/${role}`)
   }

   const shouldRender = useConditionalRedirect();

     if (!shouldRender) return null;

    return(
        <>
          
          <div className="userRoleContainer">
            <h1>I'm a</h1>
            <div className="userRoleOptions">
            <div onClick={()=>{handleClick('student')}}>Student</div>
            <div onClick={()=>{handleClick('admin')}}>Admin</div>
            </div>
          </div>
        </>
    )
}
