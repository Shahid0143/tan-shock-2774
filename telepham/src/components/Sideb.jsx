import React, { useState } from "react";
import "../style/Sidebar.scss";
import { useEffect } from "react";

import { useSearchParams } from "react-router-dom";

function Sideb() {
  const [shahid, setShahid] = useState("none");
  const [shahid1, setShahid1] = useState("none");

  const [searchParams, setSearchParams] = useSearchParams();
  const initialOrder = searchParams.get("order");
  const initialrat = searchParams.getAll("rat");
  const initialcat = searchParams.get("cat");
  const [order, setOrder] = useState(initialOrder || "");
  const [rat, setRat] = useState(initialrat || []);
  const [cat, setcat] = useState(initialcat || []);

  const handlechange = (e) => {
    let newrat = [...rat];
    const value = e.target.value;

    if (newrat.includes(value)) {
      newrat = newrat.filter((el) => el !== value);
    } else {
      newrat.push(value);
    }
    setRat(newrat);
  };

  const handleSort = (e) => {
    // console.log(e.target.value)
    setOrder(e.target.value);
  };
  // console.log(rat);
  const handle1 = (e) => {
    let newcat = [...cat];
    const value = e.target.value;

    if (newcat.includes(value)) {
      newcat = newcat.filter((el) => el !== value);
    } else {
      newcat.push(value);
    }
    setcat(newcat);
  };

  useEffect(() => {
    let params = {
      cat,
      rat,
      order, //category:[male,female]
    };

    order && (params.order = order);
    setSearchParams(params);
  }, [rat, order, cat]);

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
        <div>
          <label htmlFor="">Sort By Price (high) </label>
          <input
            type="radio"
            name="order"
            value="desc"
            defaultChecked={order === "desc"}
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
            <label htmlFor="">Rating⭐⭐⭐</label>
            <input
              type="checkbox"
              onChange={handlechange}
              value={"3.3"}
              style={{ position: "relative", right: " -8px" }}
            />
          </p>
          <p>
            <label htmlFor="">Rating⭐⭐</label>
            <input
              type="checkbox"
              onChange={handlechange}
              value={"2.7"}
              style={{ position: "relative", right: "-20px" }}
            />
          </p>
          <p>
            <label htmlFor="">Rating⭐⭐⭐⭐</label>
            <input onChange={handlechange} type="checkbox" value={"4"} />
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
            <label htmlFor="">Men👨‍🔬</label>
            <input type="checkbox" onChange={handle1} value={"men"} />
          </p>
          <p>
            <label htmlFor="">Women👩‍⚕️</label>
            <input
              type="checkbox"
              onChange={handle1}
              value={"women"}
              style={{ position: "relative", left: "-9px" }}
            />
          </p>
          <p>
            <label htmlFor="">Kid👶</label>
            <input
              type="checkbox"
              onChange={handle1}
              value={"kid"}
              style={{ position: "relative", right: "-5px" }}
            />
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
            <label htmlFor="">rating⭐⭐⭐</label>
            <input onChange={handlechange} type="checkbox" value={"3.3"} />
          </p>
          <p>
            <label htmlFor="">rating⭐⭐</label>
            <input onChange={handlechange} type="checkbox" value={"2.7"} />
          </p>
          <p>
            <label htmlFor="">rating⭐⭐⭐⭐</label>
            <input onChange={handlechange} type="checkbox" value={"4"} />
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
            <input type="checkbox" onChange={handlechange} value={"men"} />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input onChange={handlechange} type="checkbox" value={"women"} />
          </p>
          <p>
            <label htmlFor="">shahid</label>
            <input onChange={handlechange} type="checkbox" value={"kid"} />
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
