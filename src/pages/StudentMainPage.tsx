import { useState } from "react"
import "../styles/pages/studentMainPage.scss"
import { useNavigate } from "react-router-dom"
import StudentNav from "../components/StudentNav"
import { useParams } from "react-router-dom"
import { useRequireAuth } from "../customHooks/useRequireAuth"

export default function StudentMainPage(){
    
    const[tests,] = useState(['Math', 'History', 'Biology', 'Chemistry'])
    const navigate = useNavigate()
    const user = useParams().user
    // Handler for clicking on a test: navigates to the test's page
    function handleClick( test:string){
       navigate(`/tests/${test.toLowerCase()}`)
    
    }

    const shouldRender = useRequireAuth();

     if (!shouldRender) return null;
    
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

