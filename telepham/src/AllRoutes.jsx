import {Routes, Route} from 'react-router-dom'

import SignUp from './Login-SignUp Page/SignUp';
import Login from './Login-SignUp Page/Login'
function AllRoutes(){
        return <Routes>
           
           
            <Route path='/login' element={<Login/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            
        </Routes>
}


export default AllRoutes;