import RoundedButton from "../components/RoundedButton";
import "../styles/pages/testToEditPage.scss"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useRequireAuth } from "../customHooks/useRequireAuth"
import AdminNav from "../components/AdminNav";

type tests = {
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string
};

export default function TestToEditPage(){
  const[tests, setTests] = useState<tests[]>([])
  const[newQuestion, setNewQuestion] = useState<tests>({
  question: '',
  option_a: '',
  option_b: '',
  option_c: '',
  option_d: '',
  correct_answer: '',
  })

  const {subject} = useParams()

  useEffect(()=>{
           if(tests.length<1){
              fetch(`https://testprepapi-render.onrender.com/tests/${subject}_test`)
           .then(res=>res.json())
           .then(data=>setTests(data))  
           }
        },[tests])

    async function handleChangeEdit(e:React.ChangeEvent<HTMLInputElement>, index:number){
        // shallow copy to trigger re-render
        const updatedTests = [...tests]; 
        // copy and update the object
        updatedTests[index] = { ...updatedTests[index], [e.target.name]: e.target.value }; 

        setTests(updatedTests);
    }
    
    function handleChangeAdd(e:React.ChangeEvent<HTMLInputElement>){
        let updatedNewQuestion = {...newQuestion}; 
        
        updatedNewQuestion = { ...updatedNewQuestion, [e.target.name]: e.target.value }; 
        setNewQuestion(updatedNewQuestion);
    }

    async function addQuestion(){
        try{
          const res = await fetch('https://testprepapi-render.onrender.com/questions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ newQuestion: newQuestion, subject: subject }),
            });
            
            const result = await res.json();
            console.log(result);
        }
       
        catch (error) {
            console.error('Error:', error);
        }
       setTests([])
        
    }

    async function editQuestion(e:React.MouseEvent<HTMLButtonElement>, index:number){
      const updatedQuestion = tests[index]
      
          try{
          const res = await fetch('https://testprepapi-render.onrender.com/questions', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ updatedQuestion: updatedQuestion, subject: subject, id:index }),
            });
            
            const result = await res.json();
            console.log(result);
            
        }
       catch (error) {
            console.error('Error:', error);
        }
         setTests([]) 
    }

    async function deleteQuestion(e:React.MouseEvent<HTMLButtonElement>, index:number){
       const updatedQuestion = tests[index]
      
          try{
          const res = await fetch('https://testprepapi-render.onrender.com/questions', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ updatedQuestion: updatedQuestion, subject: subject, id:index }),
            });
            
            const result = await res.json();
            console.log(result);
            
        }
       catch (error) {
            console.error('Error:', error);
        }
          setTests([])
    }

    const shouldRender = useRequireAuth();

     if (!shouldRender) return null;

    return(
        <>
         <AdminNav/>
         <h1 className="testToEdit-title">{subject} Test Questions</h1>
        
            <div className="editableQuestionsContainer">
              {tests.map((test, index)=><div key={index}>
                <div className="editableQuestions">
                   <h2>Question</h2>
                   <input name='question'value={test?.question} onChange={(e)=>{handleChangeEdit(e, index)}}/>

                   <h2>Answer Options</h2>
                   <input name='option_a' value={test?.option_a} onChange={(e)=>{handleChangeEdit(e, index)}}/>
                   <input name='option_b' value={test?.option_b} onChange={(e)=>{handleChangeEdit(e, index)}}/>
                   <input name='option_c' value={test?.option_c} onChange={(e)=>{handleChangeEdit(e, index)}}/>
                   <input name='option_d' value={test?.option_d} onChange={(e)=>{handleChangeEdit(e, index)}}/>

                    <h2>Correct Answer</h2>
                   <input name='correct_answer' value={test?.correct_answer} onChange={(e)=>{handleChangeEdit(e, index)}}/>

                   <RoundedButton children='save' variant="secondary" action={(event)=>{editQuestion(event, index)}}/>
                   <RoundedButton children='delete'  action={(event)=>{deleteQuestion(event, index)}}/>
                </div>
                </div>)}

                <div className="editableQuestions">
                    <h2>Add Question</h2>

                    <h2>Question</h2>
                   <input name='question' onChange={(e)=>handleChangeAdd(e)}/>

                   <h2>Answer Options</h2>
                   <input name='option_a' onChange={(e)=>handleChangeAdd(e)}/>
                   <input name='option_b' onChange={(e)=>handleChangeAdd(e)}/>
                   <input name='option_c' onChange={(e)=>handleChangeAdd(e)}/>
                   <input name='option_d' onChange={(e)=>handleChangeAdd(e)}/>

                    <h2>Correct Answer</h2>
                   <input name='correct_answer' onChange={(e)=>handleChangeAdd(e)}/>
                    
                    <RoundedButton children='save' variant="secondary"  action={addQuestion}/>
                  </div>
                </div>
          </>
    )
}


