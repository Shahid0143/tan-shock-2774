
import { Routes, Route, Router } from "react-router-dom";
import SignUp from './Login-SignUp Page/SignUp';
import Login from './Login-SignUp Page/Login'
import PageNotFound from './pages/PageNotFound';
import Homepage from './pages/Homepage';
import AdminLogin from './Page/AdminLogin';
import Main from "./components/Main";
function AllRoutes(){
        return 
        <Routes>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/" element={<Homepage />} />
             <Route path="/medicine" element={<Main />} />
         
            <Route path='/login' element={<Login/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path="/adminLogin" element={<AdminLogin/>} />
            <Route path="*" element={<PageNotFound />} />
            
        </Routes>

}

export default AllRoutes;
