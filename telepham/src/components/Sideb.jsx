import React, { useState } from "react";
import "../style/Sidebar.scss";
import { useEffect } from "react";

import { useSearchParams } from "react-router-dom";

function Sideb() {
  const [shahid, setShahid] = useState("none");
  const [shahid1, setShahid1] = useState("none");

  const [searchParams, setSearchParams] = useSearchParams();
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");

  const handleSort = (e) => {
    // console.log(e.target.value)
    setOrder(e.target.value);
  };

  useEffect(() => {
    let params = {
      order, //category:[male,female]
    };

    order && (params.order = order);
    setSearchParams(params);
  }, [order]);

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
      <div className="sort">
        <div>
          <label htmlFor="">Sort By Price(high) </label>
          <input
            type="radio"
            name="order"
            value="desc"
            defaultChecked={order === "desc"}
            onChange={handleSort}
          />
        </div>
        <div className="sd">
          <label htmlFor="">Sort By Price(low) </label>
          <input
            type="radio"
            name="order"
            value="asc"
            defaultChecked={order === "asc"}
            onChange={handleSort}
          />
        </div>
      </div>
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
    </div>
  );
}

export default Sideb;
