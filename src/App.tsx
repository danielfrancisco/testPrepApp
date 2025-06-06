import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import UserRole from "./pages/UserRole"
import StudentMainPage from './pages/StudentMainPage';
import AdminMainPage from './pages/AdminMainPage';
import TestsPage from "./pages/TestsPage"
import TestScorePage from './pages/TestScorePage';
import EditTests from './pages/EditTests';
import TestToEditPage from './pages/TestToEditPage';
import UserPreferences from './pages/userPreferences';
import StudentScores from './pages/StudentScores';


export default function App(){
   return(
    <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/userRole/:action' element={<UserRole />} />
            <Route path='/login/:role' element={<LoginPage />} />
            <Route path='/create-account/:role' element={<CreateAccountPage />} />
            <Route path='/student-main' element={<StudentMainPage />} />
            <Route path='/admin-main' element={<AdminMainPage/>} />
            <Route path='/student-main/tests/:subject' element={<TestsPage />} />
            <Route path='/test-score/:score' element={<TestScorePage />} />
            <Route path='/edit-tests' element={<EditTests/>}/>
            <Route path='/test-toEdit/:subject' element={<TestToEditPage/>}/>
            <Route path='/user-preferences' element={<UserPreferences/>}/>
            <Route path='/students-scores' element={<StudentScores/>}/>

        </Routes>
    </Router>
    )
}

