
import { Routes, Route,  } from "react-router-dom";
import SignUp from './Login-SignUp Page/SignUp';
import Login from './Login-SignUp Page/Login'
import PageNotFound from './pages/PageNotFound';
import Homepage from './pages/Homepage';

import Main from "./components/Main";
import AdminLogin from "./Page/AdminLogin";
import Payment from "./pages/Payment";
import CartPage from "./pages/CartPage";
import SingleProductPage from "./pages/SingleProductPage";
// import Admin from "./Page/AdminLogin"
function AllRoutes(){
        return (
        <Routes>
           
            <Route path="/" element={<Homepage />} />
             <Route path="/medicine" element={<Main />} />
             <Route path="/cart" element={<CartPage/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/singleProduct/:id" element={<SingleProductPage/>} /> 
            <Route path='/login' element={<Login/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="*" element={<PageNotFound />} />
            
        </Routes>
        )
}

export default AllRoutes;
