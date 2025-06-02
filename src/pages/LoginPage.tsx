import "../styles/pages/loginPage.scss"

export default function LoginPage(){
    return(
        <>
          <div className="logIn">
              <h1> Log In</h1>
              <form>
                <label>
                    E-mail
                    <input name='e-mail'/>
                </label>

                <label>
                    Password
                    <input name='password'/>
                </label>

                <button type='submit'>Log In</button>
                
              </form>
              
            </div> 
        </>
    )
}