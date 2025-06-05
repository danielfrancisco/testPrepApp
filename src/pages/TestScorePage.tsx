import '../styles/pages/testScorePage.scss'
import { useParams } from 'react-router-dom'
import RoundedButton from '../components/RoundedButton'

export default function TestScorePage(){
    const {score} = useParams()

    return(
        <>
          <div className="testScore-container">
            <h1>Your Score: {score}</h1>
            <RoundedButton children='Go to Home Page' variant='secondary' 
            size='large' route='/student-main'/>
            
          </div>
        </>
    )
}