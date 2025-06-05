import { useState, type FormEvent} from "react"
import "../styles/pages/createAccountPage.scss"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

type FormData = {
  name: string;
  email: string;
  password: string;
  
};

type FormErrors = {
  name: string;
  email: string;
  password: string;
};

export default function CreateAccountPage() {
    const [formData, setFormData] = useState<FormData>({
     name: '',
     email: '',
     password: '',
    });

  const [errors, setErrors] = useState<FormErrors>({
     name: '',
    email: '',
    password: '',
  });

    //Pull the user’s role from the URL (e.g. /signup/student)
    const {role} = useParams()

    const navigate = useNavigate()
     
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
            name: '',
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
            
            const res = await fetch('http://localhost:3000/create-user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({form:formData, role:role }),
            });
            
            const result = await res.json();
            console.log(result);
            // navigate(`/${role}-main`);
        } catch (error) {
            console.error('Error:', error);
        }
};

    return(
        <>
           <div className="CreateAccountPageContent">
              <h1> Create Account</h1>
              
              <form onSubmit={handleSubmit}>
                <label>
                    Name 
                    <input name='name' onChange={(e)=>{GetInput(e)}}/>
                    <p>{errors.name}</p>
                </label>

                <label>
                    E-mail
                    <input name='email' onChange={(e)=>{GetInput(e)}}/>
                    <p>{errors.email}</p>
                </label>

                <label>
                    Password
                    <input name='password' onChange={(e)=>{GetInput(e)}}/>
                    <p>{errors.password}</p>
                </label>
                
                <button type='submit'>Sign Up</button>
                
              </form>
              
            </div> 
        </>
    )
}

