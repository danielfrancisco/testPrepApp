import "../styles/pages/editTests.scss"
import { useState } from "react"
import RoundedButton from "../components/RoundedButton"

export default function EditTes(){
    const[tests] = useState(['Math', 'History', 'Biology', 'Chemistry'])

 return(
        <>
        <div className="editTests-Container">
           <h1>Edition</h1>
           <div className="edit-tests">
             {tests.map((test,index)=><div  key={index}>
                <h2>{test}</h2>
                <p>5 questions</p>
                 <RoundedButton children='Edit' variant='userPage' route=''/>
             </div>)}
             </div>
        </div>
        
        </>
    )
}

