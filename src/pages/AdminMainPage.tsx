import { useState } from "react"
import "../styles/pages/adminMainPage.scss"
import AdminNav from "../components/AdminNav"
import RoundedButton from "../components/RoundedButton"

export default function AdminMainPage(){
    const[user, setUser] = useState('Admin')
    
    return(
            <>
            <AdminNav/>
            <div className="adminMainPageIntro">
                <h1>Welcome, {user}</h1>
            </div>

            <div className="adminEdits">
                <div>
                    <h2>Tests Questions</h2>
                    <p>Add/Edit/Delete</p>
                    <RoundedButton children='Edit' variant='userPage' route='/edit-tests'/>
                </div>

                <div>
                    <h2>Organizations</h2>
                    <p>Add diferent Styling</p>
                    <RoundedButton children='Edit' variant='userPage'/>
                </div>

                <div>
                    <h2>Student Scores</h2>
                    <p>View students</p>
                    <RoundedButton children='View' variant='userPage'/>
                </div>
                
            </div>
            </>
        )    
}

