import RoundedButton from "../components/RoundedButton";
import "../styles/pages/testToEditPage.scss"
import React, { useEffect, useState } from "react"

type tests = {
  id: number;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string
};

export default function TestToEditPage(){
  const[tests, setTests] = useState<tests[]>([])

  useEffect(()=>{
           if(tests.length<1){
              fetch(`http://localhost:3000/tests/math_test`)
           .then(res=>res.json())
           .then(data=>setTests(data))  
           }
          
         },[])

    function handleChange(e:React.ChangeEvent<HTMLInputElement>, index:number){
        // shallow copy to trigger re-render
        const updatedTests = [...tests]; 
        // copy and update the object
        updatedTests[index] = { ...updatedTests[index], question: e.target.value }; 
        setTests(updatedTests);
    }

    return(
        <>
         <h1>Edit Math Test Questions</h1>
        
            <div className="editableQuestionsContainer">
              {tests.map((test, index)=><div key={index}>
                <div className="editableQuestions">
                   <h2>Question</h2>
                   <input value={test?.question} onChange={(e)=>{handleChange(e, index)}}/>

                   <h2>Answer Options</h2>
                   <input value={test?.option_a} onChange={(e)=>{handleChange(e, index)}}/>
                   <input value={test?.option_b} onChange={(e)=>{handleChange(e, index)}}/>
                   <input value={test?.option_c} onChange={(e)=>{handleChange(e, index)}}/>
                   <input value={test?.option_d} onChange={(e)=>{handleChange(e, index)}}/>

                    <h2>Correct Answer</h2>
                   <input value={test?.correct_answer} onChange={(e)=>{handleChange(e, index)}}/>
                </div>

            </div>)}
               <RoundedButton children='save' variant="secondary" size="large" route="/edit-tests"/>
            </div>
          
         </>
    )
}


