import { useEffect } from "react"
import "../styles/pages/createAccountPage.scss"
import { useParams } from "react-router-dom"

export default function CreateAccountPage(){
    const {role} = useParams<'role'>()

    useEffect(()=>{
       console.log(role)
    },[])

    return(
        <>
           <div className="CreateAccountPageContent">
              <h1> Create Account</h1>
              

              <form>
                <label>
                    Name 
                    <input name='name'/>
                </label>

                <label>
                    E-mail
                    <input name='e-mail'/>
                </label>

                <label>
                    Password
                    <input name='password'/>
                </label>

                <button type='submit'>Sign Up</button>
                
              </form>
              
            </div> 
        </>
    )
}

