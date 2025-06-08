import '../styles/pages/testScorePage.scss'
import { useParams } from 'react-router-dom'
import RoundedButton from '../components/RoundedButton'
import { useRequireAuth } from "../customHooks/useRequireAuth"
import { useEffect } from 'react'

export default function TestScorePage(){
    const {score, subject} = useParams()
    const shouldRender = useRequireAuth();
    const user = localStorage.getItem('username')
    
   
    async function addUserScore() {
    try {
      const res = await fetch('https://testprepapi-render.onrender.com/studentScores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: user, score: score, subject:subject }),
      });

      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  }

    useEffect(()=>{
        addUserScore()
    },[])

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