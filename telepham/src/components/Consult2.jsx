import React, { useState, useEffect } from "react";
import "../style/Consult2.scss";
// import axios from "axios";
import Mgmatters from "./Matters";
import Information from "./Info";
import { Link } from "react-router-dom";

function Consult2() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [popup, setPopup] = useState("none");

  // Initialize arr within the component's scope
  const arr = JSON.parse(localStorage.getItem("consult")) || [];

  // Retrieve existing data from local storage when the component mounts
  useEffect(() => {
    // You can set the retrieved data to your state variables if needed
    // For example, if you want to display the last stored entry:
    if (arr.length > 0) {
      const lastEntry = arr[arr.length - 1];
      setName(lastEntry.name);
      setAge(lastEntry.age);
      setGender(lastEntry.gender);
    }
  }, []);

  const handleclick = () => {
    setPopup("block");
  };

  const closePopup = () => {
    setPopup("none");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const submitChiththa = () => {
    const Form = {
      name,
      age,
      gender,
    };

    // Retrieve the existing data from local storage (already initialized as arr)
    // Add the new form data to the existing data
    arr.push(Form);

    // Save the updated data back to local storage
    localStorage.setItem("consult", JSON.stringify(arr));
  };
  return (
    <>
      <div id="doctorform" className="doctorform">
        <div className="top_section">
          <div className="info_section">
            <h2>Who are you consulting for ?</h2>
            <p>
              Select person you want to consult for and your preferred mode of
              consultation
            </p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/marketing/41db3546-84e8-4317-9a8f-dd24f17973f9.png"
              alt=""
            />
          </div>
        </div>
        <div className="data_section">
          {arr.map((item) => (
            <div className="maped">
              <div>
                <h4>NAME</h4>
                <p>{item.name}</p>
                <h4>AGE</h4>
                <p>{item.age}</p>
                <h4>GENDER</h4>
                <p>{item.gender}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button onClick={handleclick} className="memberAdd">
            + Add New Member
          </button>
        </div>
        <div className="contact_section">
          <label>Patient phone number</label>
          <input type="text" name="" id="" placeholder="Enter Patient Number" />
        </div>
        <div className="Chat_section">
          <p>What is your preferred mode of consultation?</p>
          <button className="chat_button">Video</button>
          <button className="chat_button">Audio</button>
          <button className="chat_button">Chat</button>
        </div>
        <div id="proceed">
          <Link to="/consult3">
            {" "}
            <button className="proceed">Proceed</button>
          </Link>
        </div>

        <div style={{ display: popup }} className="Dc-popup">
          <div className="whitePopup">
            <h3>Add patient</h3>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div>
                <input
                  type="text"
                  placeholder="Enter patient's name"
                  name="patient"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="age"
                  placeholder="Enter patient's age"
                  value={age}
                  required
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <label className="gendertag">Gender</label>
              <select
                name="gender"
                id=""
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Choose_option">Choose option</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
              <button onClick={submitChiththa} type="submit">
                Submit
              </button>
              <button className="closeForm" onClick={closePopup}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Mgmatters />
        <Information />
      </div>
    </>
  );
}

export default Consult2;
