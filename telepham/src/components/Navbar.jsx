import React, { useState } from "react";
import "../components/Navbar.scss";
import open from "../images/open.png";

function Navbar() {
  const [a, setA] = useState("-100%");
  const openpopup = () => {
    setA("0");
  };
  const closePopup = () => {
    setA("-100%");
  };

  return (
    <div className="nav" id="nav">
      <div className="logo">
        <i>SHAHID</i>
      </div>
      <div style={{ right: a }} className="nav-content">
        <ul>
          <li>Medicine</li>
          <li>Doctor</li>
          <li>Pharmacy</li>
          <li>Other Services</li>
        </ul>
        <div className="icon">
          <p>🏠</p>
          <button>Consult Now</button>
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
