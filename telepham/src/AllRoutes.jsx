import { Routes, Route, Router } from "react-router-dom";

import SignUp from "./Login-SignUp Page/SignUp";
import Login from "./Login-SignUp Page/Login";
import Homepage from "./pages/Homepage";
import Main from "./components/Main";
import Consult from "./components/Consult";
import Consult2 from "./components/Consult2";
import Consult3 from "./components/Consult3";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/medicine" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/consult" element={<Consult />} />
      <Route path="/consult2" element={<Consult2 />} />
      <Route path="/consult3" element={<Consult3 />} />
    </Routes>
  );
}

export default AllRoutes;
