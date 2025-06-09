import "../styles/pages/editTests.scss"
import { useState } from "react"
import RoundedButton from "../components/RoundedButton"
import { useRequireAuth } from "../customHooks/useRequireAuth"
import AdminNav from "../components/AdminNav"

export default function EditTes(){
    const[tests] = useState(['Math', 'History', 'Biology', 'Chemistry'])

    const shouldRender = useRequireAuth();

     if (!shouldRender) return null;

 return(
        <>
        <AdminNav/>
        <div className="editTests-Container">
           <h1>Edition</h1>
           <div className="edit-tests">
             {tests.map((test,index)=><div  key={index}>
                <h2>{test}</h2>
                <p>5 questions</p>
                 <RoundedButton children='Edit' variant='userPage' route={`/test-toEdit/${test}`}/>
             </div>)}
             </div>
        </div>
        
        </>
    )
}

