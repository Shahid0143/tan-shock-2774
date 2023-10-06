import { Routes, Route } from "react-router-dom";
import SignUp from "./Login-SignUp Page/SignUp";
import Login from "./Login-SignUp Page/Login";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import AdminLogin from "./Page/AdminLogin";
import Payment from "./pages/Payment";
import CartPage from "./pages/CartPage";
import SingleProductPage from "./pages/SingleProductPage";
import Consult from "./components/Consult";
import Consult2 from "./components/Consult2";
import Consult3 from "./components/Consult3";
import { Admin } from "./Page/Admin";
import { AdminRoutes } from "./Component/Admin/AdminRoutes";
import Main from "./components/Main";

import PrivateRoute from "./components/PrivateRoute";
import DoctorProfile from "./components/Doctor/DoctorProfile";
import Telemedicine from "./components/OtherService/Telemedicine";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* //Doctor  route*/}
      <Route path="/doctor" element={<DoctorProfile />} />
      <Route path="/service" element={<Telemedicine />} />
      <Route path="/medicine" element={<Main />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
      <Route path="/payment" element={<Payment />} />
      <Route path="/singleProduct/:id" element={<SingleProductPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/consult" element={<Consult />} />
      <Route path="/consult2" element={<Consult2 />} />
      <Route path="/consult3" element={<Consult3 />} />
      <Route path="/admin" element={<Admin />}></Route>
    </Routes>
  );
}

export default AllRoutes;
