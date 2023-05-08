
import { Routes, Route,  } from "react-router-dom";
import SignUp from './Login-SignUp Page/SignUp';
import Login from './Login-SignUp Page/Login'
import PageNotFound from './pages/PageNotFound';
import Homepage from './pages/Homepage';

import Main from "./components/Main";
import AdminLogin from "./Page/AdminLogin";
// import Admin from "./Page/AdminLogin"
function AllRoutes(){
        return (
        <Routes>
           
            <Route path="/" element={<Homepage />} />
             <Route path="/medicine" element={<Main />} />
         
            <Route path='/login' element={<Login/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="*" element={<PageNotFound />} />
            
        </Routes>
        )
}

export default AllRoutes;
