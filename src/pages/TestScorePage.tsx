import '../styles/pages/testScorePage.scss'
import { useParams } from 'react-router-dom'
import RoundedButton from '../components/RoundedButton'
import { useRequireAuth } from "../customHooks/useRequireAuth"

export default function TestScorePage(){
    const {score} = useParams()
    const shouldRender = useRequireAuth();
    const user = localStorage.getItem('username')
    
     if (!shouldRender) return null;
    return(
        <>
          <div className="testScore-container">
            <h1>Your Score: {score}</h1>
            <RoundedButton children='Go to Home Page' variant='secondary' 
            size='large' route={`/student-main/${user}`}/>
            
          </div>
        </>
    )
}