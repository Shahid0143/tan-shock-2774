import React, { useContext, useState, useEffect } from "react";
import "../style/Navbar.scss";
import { auth } from "../firebase";
import open from "../images/open.png";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

import { FaShoppingCart } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Spacer,
  Text,
  Circle,
  Img,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  Menu,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";
function Navbar() {
  const [a, setA] = useState("-100%");
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [userNameFirstLetter, setUserNameFirstLetter] = useState("");
  const userName = userNameFirstLetter.toUpperCase();
  const [authUser, setAuthUser] = useState(null);
  const openpopup = () => {
    setA("0");
  };
  const closePopup = () => {
    setA("-100%");
  };

  const consult = () => {
    navigate("/consult");
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUserNameFirstLetter(user.email[0]);
        setAuthUser(user);
        setIsAuth(true);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const logOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth).then(() => {
          setAuthUser(null);
          setIsAuth(false);
          Swal.fire("Logged Out!", "You have been logged out!", "success");
        });
      }
    });
  };

  //getting cart from cart reducer
  let { cart } = useSelector((store) => store.cartReducer);

  return (
    <div className="nav" id="nav">
      <div className="logo">
        <i onClick={() => navigate("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 100 100"
          >
            <defs>
              <clipPath id="circle-clip">
                <circle cx="50" cy="50" r="40" />
              </clipPath>
            </defs>

            <image
              x="15"
              y="15"
              width="70"
              height="70"
              href="data:image/png;base64,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"
              clip-path="url(#circle-clip)"
            />
          </svg>
        </i>
      </div>
      <div style={{ right: a }} className="nav-content">
        <ul>
          <li onClick={() => navigate("/medicine")}>Medicine</li>
          <li onClick={() => navigate("/doctor")}>Doctor</li>
          <li>Pharmacy</li>
          <li onClick={() => navigate("/service")}>Other Services</li>
        </ul>

        <div className="icon">
          <div className="w">
            {authUser ? (
              <Menu border="none">
                <MenuButton
                  className="ck"
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Circle size="40px" bg="teal" color="white">
                    <Text fontSize={"20px"} fontWeight={"600"}>
                      {userName}
                    </Text>
                  </Circle>
                </MenuButton>
                <MenuList style={{ color: "black" }}>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem onClick={() => navigate("/adminLogin")}>
                    Admin
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={logOut}>Logout</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <div className="lock">
                <IconButton
                  aria-label="Login"
                  icon={<FaUserCircle />}
                  colorScheme="teal"
                  variant="ghost"
                  onClick={() => navigate("/login")}
                />
              </div>
            )}
          </div>
          <p onClick={() => navigate("/cart")}>
            {" "}
            <IconButton
              aria-label="Shopping Cart"
              icon={<FaShoppingCart />}
              colorScheme="teal"
              variant="ghost"
            />
            <div
              style={{
                position: "absolute",
                top: "20%",
                right: "10.4%",

                background: "teal",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                textAlign: "center",
                lineHeight: "20px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {cart.length}
            </div>
          </p>
          <button onClick={consult}>Consult Now</button>
        </div>
        <div onClick={closePopup} className="close">
          <button>❌</button>
        </div>
      </div>

      <div onClick={openpopup} className="menubar">
        <button>
          <img className="three-line" src={open} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
