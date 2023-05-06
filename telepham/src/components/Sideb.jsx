import React, { useState } from "react";
import "../components/Sidebar.scss";

function Sideb() {
  const [shahid, setShahid] = useState("none");
  const [shahid1, setShahid1] = useState("none");
  const popup = () => {
    if (shahid === "none") {
      setShahid("block");
      setShahid1("none");
    } else {
      setShahid("none");
    }
  };
  const popup2 = () => {
    if (shahid1 === "none") {
      setShahid1("block");
      setShahid("none");
    } else {
      setShahid1("none");
    }
  };
  return (
    <div className="sidebar" id="sidebar">
      <h2 className="sub-heading">Product Categories</h2>
      <div className="filtering">
        <div className="osama">
          <p>
            Handcare<span onClick={popup}>➕</span>
          </p>
        </div>
        <div className="shahid" style={{ display: shahid }}>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
        </div>
      </div>
      <div className="filtering">
        <div className="osama">
          <p>
            Cosmetics<span onClick={popup2}>➕</span>
          </p>
        </div>
        <div className="shahid" style={{ display: shahid1 }}>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
        </div>
      </div>
      <div className="filtering">
        <div className="osama">
          <p>
            medicines<span>➕</span>
          </p>
        </div>
        <div className="shahid" style={{ display: "none" }}>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
        </div>
      </div>
      <div className="filtering">
        <div className="osama">
          <p>
            medicines<span>➕</span>
          </p>
        </div>
        <div className="shahid" style={{ display: "none" }}>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
        </div>
      </div>

      <div className="filtering">
        <div className="osama">
          <p>
            medicines<span>➕</span>
          </p>
        </div>
        <div className="shahid" style={{ display: "none" }}>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
        </div>
      </div>

      <div className="filtering">
        <div className="osama">
          <p>
            medicines<span>➕</span>
          </p>
        </div>
        <div className="shahid" style={{ display: "none" }}>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
        </div>
      </div>

      <div className="filtering">
        <div className="osama">
          <p>
            medicines<span>➕</span>
          </p>
        </div>
        <div className="shahid" style={{ display: "none" }}>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
        </div>
      </div>

      <div className="filtering">
        <div className="osama">
          <p>
            medicines<span>➕</span>
          </p>
        </div>
        <div className="shahid" style={{ display: "none" }}>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
        </div>
      </div>

      <div className="filtering">
        <div className="osama">
          <p>
            medicines<span>➕</span>
          </p>
        </div>
        <div className="shahid" style={{ display: "none" }}>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
        </div>
      </div>
      <div className="filtering">
        <div className="osama">
          <p>
            medicines<span>➕</span>
          </p>
        </div>
        <div className="shahid" style={{ display: "none" }}>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
        </div>
      </div>
      <div className="filtering">
        <div className="osama">
          <p>
            medicines<span>➕</span>
          </p>
        </div>
        <div className="shahid" style={{ display: "none" }}>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input type="checkbox" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sideb;
