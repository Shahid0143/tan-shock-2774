import React, { useContext, useState, useEffect } from "react";
import "../style/Navbar.scss";
import { auth } from "../firebase";
import open from "../images/open.png";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { UnlockIcon } from "@chakra-ui/icons";
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

  return (
    <div className="nav" id="nav">
      <div className="logo">
        <i onClick={() => navigate("/")}>
          <img
            className="top-img"
            style={{ borderRadius: "50%", width: "35%" }}
            src="https://static.pocketcasts.com/discover/images/400/9a41cbe0-c5ab-0136-7b94-27f978dac4db.jpg"
            alt=""
          />
        </i>
      </div>
      <div style={{ right: a }} className="nav-content">
        <ul>
          <li onClick={() => navigate("/medicine")}>Medicine</li>
          <li>Doctor</li>
          <li>Pharmacy</li>
          <li>Other Services</li>
        </ul>

        <div className="icon">
          <div className="w">
            {authUser ? (
              // <Box
              //   display="flex"
              //   gap="10px"
              //   alignItems={"center"}
              //   justifyContent={"center"}
              // >
              //   <Circle size="40px" bg="black" color="white">
              //     <Text fontSize={"20px"} fontWeight={"600"}>
              //       {userName}
              //     </Text>
              //   </Circle>
              //   <Button onClick={logOut} colorScheme="red">
              //     Log Out
              //   </Button>{" "}
              // </Box>
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
              <span>
                <UnlockIcon onClick={() => navigate("/login")} />
              </span>
            )}
          </div>
          <p onClick={() => navigate("/cart")}>🏠</p>
          <button onClick={consult}>Consult Now</button>
        </div>
        <div onClick={closePopup} className="close">
          <button>❌</button>
        </div>
      </div>

      <div onClick={openpopup} className="menubar">
        <button>
          <img src={open} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
