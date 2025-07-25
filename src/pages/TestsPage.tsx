import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../styles/pages/testsPage.scss"
import { useNavigate } from "react-router-dom"
import { useRequireAuth } from "../customHooks/useRequireAuth"
import StudentNav from "../components/StudentNav"

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
     const[selected, setSelected] = useState('')

     const {subject} = useParams()
     const navigate = useNavigate()
     console.log(subject)
    useEffect(()=>{
       fetch(`https://testprepapi-render.onrender.com/tests/${subject}_test`)
       .then(res=>res.json())
       .then(data=>setTests(data))
     },[])

    // increases currentQuestion to show the next question
     function handleNext(){
      setSelected('')
       if(currentQuestion<tests.length-1){
        setQuestion(currentQuestion+1)
       }

       if(currentQuestion===tests.length-1){
            navigate(`/test-score/${subject}/${scoreCounter}`)
       }
       setChoiseIsCorrect(false)
     }
      //just a custom capitalize function
     function capitalize(str: string | undefined):string {
      if (!str) return '';
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
   
    //increases scoreCounter if the user's choice is correct
     function handleSelection(e:React.MouseEvent<HTMLDivElement>, selection: string){
        setSelected(selection)
      //  if they've already clicked the correct option, bail out
         if(choiseIsCorrect)return

         const target = e.target as HTMLElement;
         const choice = target.innerHTML
         if(choice===tests[currentQuestion]?.correct_answer){
            setScoreCounter(scoreCounter=>scoreCounter+25) 
            setChoiseIsCorrect(true)
         }         
        }

    const shouldRender = useRequireAuth();

     if (!shouldRender) return null;

    return(
      <>
        <StudentNav/>
        <h1 className="test-title">{`${capitalize(subject)} Test` }</h1>
        <div className="questionsContainer">
            <h2>{tests[currentQuestion]?.question}</h2>

            <div className={`options ${selected === 'option1' ? 'active' : ''}`} tabIndex={0} 
            onClick={(e)=>handleSelection(e, 'option1')}>
              {tests[currentQuestion]?.option_a}
            </div>

            <div className={`options ${selected === 'option2' ? 'active' : ''}`}  tabIndex={0}
             onClick={(e)=>handleSelection(e, 'option2')}>
              {tests[currentQuestion]?.option_b}
            </div>
            <div className={`options ${selected === 'option3' ? 'active' : ''}`}  tabIndex={0} 
            onClick={(e)=>handleSelection(e, 'option3')}>
              {tests[currentQuestion]?.option_c}
            </div>
            <div className={`options ${selected === 'option4' ? 'active' : ''}`}   tabIndex={0} 
            onClick={(e)=>handleSelection(e, 'option4')}>
              {tests[currentQuestion]?.option_d}
            </div>
            <button onClick={handleNext}>Next</button>
        </div>
      </>
    )
}

