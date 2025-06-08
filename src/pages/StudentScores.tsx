import { useEffect, useState } from "react"
import "../styles/pages/studentScores.scss"
import { useRequireAuth } from "../customHooks/useRequireAuth"

type StudentScores = {
   subject_name : string,
   student_name : string,
   score: number
}

export default function StudentScores(){
    const[scores, setScores] = useState([{name:'Daniel', mathScore:8, historyScore:10}, 
        {name:'Rick', mathScore:10, historyScore:9}
    ])

    const [studentScores, setStundetScores] = useState<StudentScores[]>([{
      subject_name: '',
      student_name: '',
      score: 0,
    }])

    useEffect(()=>{
       fetch('http://localhost:3000/studentScores')
       .then(res=>res.json())
       .then(data=>setStundetScores(data))
    },[])

    useEffect(()=>{
      console.log(studentScores)
    },[studentScores])

    const shouldRender = useRequireAuth();
   
        if (!shouldRender) return null;
    return(
        <>
          <div className="student-scoresContainer">
            <h1>Students Scores</h1>
             {studentScores.map((studentScore, index)=>(
               <div className="score-table" key={index}>
                  <div className="header row">
                    <div className="cell">{studentScore.subject_name}</div>
                  </div>
      
      
              <div  className="cell">{studentScore.student_name}</div>
                 <div  className="cell">{studentScore.score}</div>
              </div>
             ))}
          </div>

        </>
    )
}

