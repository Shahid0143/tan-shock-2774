
// import "./App.scss"
import Main from "./components/Main"

import Navbar from "./components/Navbar"
import './style/App.scss'
import AllRoutes from './AllRoutes';
import { AdminRoutes } from "./Component/Admin/AdminRoutes";


function App() {
  return (
    <div >

      
      <Navbar/>
     

      <AllRoutes />

    </div>
  )
}
export default App;
