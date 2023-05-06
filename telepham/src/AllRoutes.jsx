import {Routes, Route} from 'react-router-dom'

import SignUp from './Login-SignUp Page/SignUp';
import Login from './Login-SignUp Page/Login'
import PageNotFound from './pages/PageNotFound';
function AllRoutes(){
        return <Routes>
           
           
            <Route path='/login' element={<Login/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path="*" element={<PageNotFound />} />
            
        </Routes>
}


export default AllRoutes;