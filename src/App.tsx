import { HashRouter as Router, Routes, Route,} from 'react-router-dom';
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
import UserPreferences from './pages/UserPreferences';
import StudentScores from './pages/StudentScores';

export default function App(){
   return(
    <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/userRole/:action' element={<UserRole />} />
            <Route path='/login/:role' element={<LoginPage />} />
            <Route path='/create-account/:role' element={<CreateAccountPage />} />
            <Route path='/student-main/:user' element={<StudentMainPage />} />
            <Route path='/admin-main/:user' element={<AdminMainPage/>} />
            <Route path='/tests/:subject' element={<TestsPage />} />
            <Route path='/test-score/:subject/:score' element={<TestScorePage />} />
            <Route path='/edit-tests' element={<EditTests/>}/>
            <Route path='/test-toEdit/:subject' element={<TestToEditPage/>}/>
            <Route path='/user-preferences' element={<UserPreferences/>}/>
            <Route path='/students-scores' element={<StudentScores/>}/>
        </Routes>
    </Router>
    )
}

