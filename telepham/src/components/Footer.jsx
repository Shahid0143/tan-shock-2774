import React from "react";
import "../components/Footer.scss";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="foot">
        <div className="m1">
          <h2>All Medicine</h2>
          <p>Health&Care</p>
          <p>BeautyCare</p>
        </div>
        <div className="m1">
          <h2>Doctor</h2>
          <p>Phishtherapy</p>
          <p>Heart Specilist</p>
        </div>
        <div className="m1">
          <h2>Hospital</h2>
          <p>Government Listed</p>
          <p>Top Private</p>
        </div>
        <div className="m1">
          <h2>About Us</h2>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="copyright">@no cop right</div>
    </div>
  );
}
