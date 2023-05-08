import React from "react";
import "../style/Slider.scss";

function Sliderr({ name, desc, rating, img }) {
  return (
    <div id="xyz" className="xyz">
      <div className="testimonialchild">
        <img src={img} alt="" />
      </div>
      <div className="nameee">
        <p>{name}</p>
      </div>
      <div className="desc">
        <p>{desc}</p>
      </div>

      <div className="abcd">
        <p>
          <span>⭐</span>
          {rating}
        </p>
      </div>
    </div>
  );
}

export default Sliderr;
