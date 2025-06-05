import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../styles/pages/testsPage.scss"
import { useNavigate } from "react-router-dom"

type tests = {
  id: number;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string
};

export default function TestsPage(){
     const[tests, setTests] = useState<tests[]>([])
     const[scoreCounter, setScoreCounter] = useState(0)
     const[currentQuestion, setQuestion] = useState(0)
     const[choiseIsCorrect, setChoiseIsCorrect] = useState(false)

     const {subject} = useParams()
     const navigate = useNavigate()
     
    useEffect(()=>{
       fetch(`http://localhost:3000/tests/${subject}_test`)
       .then(res=>res.json())
       .then(data=>setTests(data))
     },[])

    // increases currentQuestion to show the next question
     function handleNext(){
       if(currentQuestion<tests.length-1){
        setQuestion(currentQuestion+1)
       }

       if(currentQuestion===tests.length-1){
            navigate(`/test-score/${scoreCounter}`)
       }
       setChoiseIsCorrect(false)
     }
      //not relevant just a custom capitalize function
     function capitalize(str: string | undefined):string {
      if (!str) return '';
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
   
    //increases scoreCounter if the user's choice is correct
     function handleSelection(e:React.MouseEvent<HTMLDivElement>){
      //  if they've already clicked the correct option, bail out
         if(choiseIsCorrect)return

         const target = e.target as HTMLElement;
         const choice = target.innerHTML
         if(choice===tests[currentQuestion]?.correct_answer){
            setScoreCounter(scoreCounter=>scoreCounter+25) 
            setChoiseIsCorrect(true)
         }         
        }

    return(
      <>
        <h1 className="test-title">{`${capitalize(subject)} Test` }</h1>
        <div className="questionsContainer">
            <h2>{tests[currentQuestion]?.question}</h2>
            <div className="options" tabIndex={0} onClick={(e)=>handleSelection(e)}>
              {tests[currentQuestion]?.option_a}
            </div>
            <div className="options"  tabIndex={0} onClick={(e)=>handleSelection(e)}>
              {tests[currentQuestion]?.option_b}
            </div>
            <div className="options"  tabIndex={0} onClick={(e)=>handleSelection(e)}>
              {tests[currentQuestion]?.option_c}
            </div>
            <div className="options"   tabIndex={0} onClick={(e)=>handleSelection(e)}>
              {tests[currentQuestion]?.option_d}
            </div>
            <button onClick={handleNext}>Next</button>
        </div>
      </>
    )
}

