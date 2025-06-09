import "../styles/pages/loginPage.scss"
import { useState, type FormEvent,} from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useConditionalRedirect } from "../customHooks/useConditionalRedirect";

type FormData = {
  email: string;
  password: string;
  
};

type FormErrors = {
  email: string;
  password: string;
};

export default function LoginPage(){
    const[formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        
    })
    const [errors, setErrors] = useState<FormErrors>({
         email: '',
        password: '',
      });

      const shouldRender = useConditionalRedirect();

      const navigate = useNavigate()
      
      //Pull the user’s role from the URL (e.g. /signup/student)
    const {role} = useParams()

    /*Update formData for any <input> change.
    Uses the input’s `name` attribute to map to our state keys.*/
    const GetInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e: FormEvent) => {
            e.preventDefault();
    
            // Create a fresh errors object
            const newErrors: FormErrors = {
                email: '',
                password: '',
            };
            let hasErrors = false;
    
            // Validate all fields
            (Object.keys(formData) as (keyof FormData)[]).forEach((field) => {
                if (!formData[field].trim()) {
                newErrors[field] = 'this field is required';
                hasErrors = true;
                }
            });
    
            // Push errors into state
            setErrors(newErrors);
    
            //If any errors, bail out
            if (hasErrors) {
                return;
            }
    
            // If no errors, run submission logic
            try {
                const res = await fetch('https://testprepapi-render.onrender.com/login', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({form: formData, role:role}),
                });
                
                const result = await res.json();

                if (result.message === 'Invalid credentials') {
                    const errorUpdate: FormErrors = {
                        email: 'incorrect email or password',
                        password: 'incorrect email or password',
                    };
                    setErrors(errorUpdate);
                    return; // Prevent further execution
                }
                
                localStorage.setItem('username',result.username)
                localStorage.setItem('token',result.token)

                if (role !== undefined) {
                  localStorage.setItem('role', role);
                }

                navigate(`/${role}-main/${result.username}`);
            } catch (error) {
                console.error('Error:', error);
            }
    };

    function RegisterNewUser(){
      navigate(`/create-account/${role}`)
    }

    if (!shouldRender) return null;
    
return(
        <>
          <div className="logIn" onSubmit={handleSubmit}>
              <h1> Log In</h1>
              <form>
                <label>
                    E-mail
                    <input name='email'onChange={(e)=>{GetInput(e)}}/>
                    <p>{errors.email}</p>
                </label>

                <label>
                    Password 
                    <input name='password' type="password" 
                    onChange={(e)=>{GetInput(e)}}/>

                    <p>{errors.password}</p>
                </label>
                
                <button type='submit'>Log In</button>
              </form>
              <div className="loginPageRegister">
                 <p>Dont have an account yet?</p>
                 <h4 onClick={RegisterNewUser}>Register!</h4>
              </div>
              
              
            </div> 
        </>
    )
}
