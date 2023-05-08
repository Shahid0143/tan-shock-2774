import { Routes, Route, Router } from "react-router-dom";

import SignUp from "./Login-SignUp Page/SignUp";
import Login from "./Login-SignUp Page/Login";
import Homepage from "./pages/Homepage";
import Main from "./components/Main";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/medicine" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default AllRoutes;
