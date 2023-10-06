import React from "react";
import "../style/Footer.scss";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="foot">
        <div className="m1">
          <h2>All Medicine</h2>
          <p>Health&Care</p>
          <p>BeautyCare</p>
          <p>Protein</p>
          <p>Vitamin</p>
          <p>Vitamin D</p>
        </div>
        <div className="m1">
          <h2>Doctor</h2>
          <p>Phishtherapy</p>
          <p>Heart Specilist</p>
          <p>Bone Specilist</p>
          <p>Intintine Specilist</p>
          <p>Brain Specilist</p>
        </div>
        <div className="m1">
          <h2>Hospital</h2>
          <p>Government Listed</p>
          <p>Top Private</p>
          <p>Top Public</p>
          <p>Top Open</p>
          <p>Top Medium</p>
        </div>
        <div className="m1">
          <h2>About Us</h2>
          <p>Contact Us</p>
          <p>Instagram</p>
          <p>WhatUp</p>
        </div>
      </div>
      <div className="copyright">@No Copy Right 2003</div>
    </div>
  );
}
