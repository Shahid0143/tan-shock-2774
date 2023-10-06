import React from "react";
import "../Doctor/DoctorProflie.css";
const DoctorData = ({ avatar, name, specialization, rating, reviews }) => {
  return (
    <div className="doctor-card">
      <div className="card">
        <div className="doctor-avatar">
          <img src={avatar} alt={avatar} />
        </div>
        <div className="name">
          <h3>Name: {name}</h3>
        </div>
        <div className="spec">
          <p>Specialization: {specialization}</p>
        </div>
        <div className="rating">
          <p>Rating: {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorData;
