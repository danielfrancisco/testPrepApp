import { useState } from "react"
import "../styles/pages/studentMainPage.scss"
import { useNavigate } from "react-router-dom"
import StudentNav from "../components/StudentNav"

export default function StudentMainPage(){
    const[user, setUser] = useState('User')
    const[tests, setTests] = useState(['Math', 'History', 'Biology', 'Chemistry'])
    const navigate = useNavigate()

    // Handler for clicking on a test: navigates to the test's page
    function handleClick( test:string){
       navigate(`tests/${test.toLowerCase()}`)
    
    }
    
    return(
        <> 
            <StudentNav/>
             <div className="studentMainPageIntro">
             <h1>Welcome, {user}</h1>
             <p>Prepare for your exams with practice questions</p>
             <h2>Avaiable Tests</h2>
             </div>
             
             <div className="student-tests">
             {tests.map((test,index)=><div  key={index}>
                <h2>{test}</h2>
                <p>5 questions</p>
                 {/* Button to start the selected test */}
                <button onClick={()=>handleClick(test)}>
                    Start
                </button>
             </div>)}
             </div>
           
        </>
    )
}

