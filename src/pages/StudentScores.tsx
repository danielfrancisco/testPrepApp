import { useState } from "react"
import "../styles/pages/studentScores.scss"
import { useRequireAuth } from "../customHooks/useRequireAuth"

export default function StudentScores(){
    const[scores, setScores] = useState([{name:'Daniel', mathScore:8, historyScore:10}, 
        {name:'Rick', mathScore:10, historyScore:9}
    ])
   const shouldRender = useRequireAuth();
   
        if (!shouldRender) return null;
    return(
        <>
            <div className="student-scoresContainer">
  <h1>Students Scores</h1>
  <div className="score-table">
    <div className="header row">
      <div className="cell">Name</div>
      <div className="cell">Math</div>
      <div className="cell">History</div>
      <div className="cell">Chemisrty</div>
      <div className="cell">Biology</div>
    </div>
      
      {scores.map(score=><div  className="row">
              <div  className="cell">{score.name}</div>
              <div  className="cell">{score.mathScore}</div>
              <div  className="cell">{score.historyScore}</div>
      </div>)}
  </div>
</div>

        </>
    )
}

