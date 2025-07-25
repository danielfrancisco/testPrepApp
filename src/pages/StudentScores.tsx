import { useEffect, useState } from "react"
import "../styles/pages/studentScores.scss"
import { useRequireAuth } from "../customHooks/useRequireAuth"
import AdminNav from "../components/AdminNav"

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

    const token = localStorage.getItem('token') 

    useEffect(()=>{
       fetch('https://testprepapi-render.onrender.com/studentScores', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
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
          <AdminNav/>
          <div className="student-scoresContainer">
            <h1>Students Scores</h1>
            <div className="scoreTableTitles">
                    <h4>Subject</h4>
                    <h4>Student</h4>
                    <h4>Score</h4>
                  </div>
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

