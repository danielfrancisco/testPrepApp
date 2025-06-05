import { useState } from "react"
import "../styles/pages/adminMainPage.scss"

export default function AdminMainPage(){
    const[user, setUser] = useState('Admin')
        
        return(
            <>
            <div className="adminMainPageIntro">
                <h1>Welcome, {user}</h1>
            </div>

            <div className="adminEdits">
                <div>
                    <h2>Tests Questions</h2>
                    <p>Add/Edit/Delete</p>
                    <button>Edit</button>
                </div>

                <div>
                    <h2>Organizations</h2>
                    <p>Add diferent Styling</p>
                    
                    <button>Edit</button>
                </div>

                <div>
                    <h2>Student Scores</h2>
                    <p>View students</p>
                    
                    <button>View</button>
                </div>
                
            </div>
            </>
        )    
}

