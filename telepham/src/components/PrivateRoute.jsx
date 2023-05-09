import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Login from '../Login-SignUp Page/Login';
export default function PrivateRoute({children}) {
    const {isAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(isAuth)
    if(!isAuth){
        return <Login/>
    }
    return children;
  
}
