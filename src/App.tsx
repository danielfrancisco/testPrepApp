import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import UserRole from "./pages/UserRole"

export default function App(){
   return(
    <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/userRole/:action' element={<UserRole />} />
            <Route path='/login/:role' element={<LoginPage />} />
            <Route path='/create-account/:role' element={<CreateAccountPage />} />
        </Routes>
    </Router>
    )
}

