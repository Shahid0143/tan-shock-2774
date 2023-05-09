import React from "react";
import "../style/Consult3.scss";
import Mgmatters from "./Matters";
import Information from "./Info";
import { Link } from "react-router-dom";
function Consult3() {
  return (
    <>
      <div id="Consult3" className="Consult3">
        <div className="top_section">
          <div className="info_section">
            <h2>Select your speciality</h2>
            <p>Scroll and select the speciality of your choice</p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/marketing/3d0c445a-a194-4c83-851f-15507cadb4a0.png"
              alt=""
            />
          </div>
        </div>
        <div className="data_section">
          <div className="maped">
            {" "}
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/134/24_7_helpline.png"
              alt=""
            />{" "}
            <span>24x7 Doctor Assistance</span>
          </div>

          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/33/Bone__Join_and_Muscle_Care_1.84x.png"
              alt=""
            />{" "}
            <span> Bone & Joint Specialist</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/106/Chest_Physician_1.84x.png"
              alt=""
            />{" "}
            <span> Chest Physician</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/115/Covid_19_1.84x.png"
              alt=""
            />{" "}
            <span> CoronaVirus - COVID related</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/116/Covid_19_1.84x.png"
              alt=""
            />{" "}
            <span> COVID-19_ICICI</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/137/Diabetes_medicator__1_.png"
              alt=""
            />{" "}
            <span> Diabetes Educator</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/22/Eye_care_1.84x.png"
              alt=""
            />{" "}
            <span> Eye Specialist</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/4/Skin___Hair_Specialist_1.84x.png"
              alt=""
            />{" "}
            <span> Skin & Hair Specialist</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/3/Cardiology_1.84x.png"
              alt=""
            />{" "}
            <span> Heart Specialist</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/23/Urology_1.84x.png"
              alt=""
            />{" "}
            <span> Urologist</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/31/Dental_Surgery_1.84x.png"
              alt=""
            />{" "}
            <span> Dentist</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/135/Physician.png"
              alt=""
            />{" "}
            <span> MD Physician</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/101/Nephrology_1.84x.png"
              alt=""
            />{" "}
            <span> Nephrologist</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/1/Psychiatrist_1.84x.png"
              alt=""
            />{" "}
            <span> Physiotherapist</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/27/Quit_Smoking_1.84x.png"
              alt=""
            />{" "}
            <span> Quit Smoking</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/5/Sexology_1.84x.png"
              alt=""
            />{" "}
            <span>Sexologist</span>
          </div>
        </div>
        <div>
          <button className="memberAdd">
            Looking for Alternative Treatment ?
          </button>
        </div>

        <div id="proceed">
          <Link to="/consult2">
            {" "}
            <button className="back">Back</button>
          </Link>
          <Link to="/">
            <button className="proceed">Proceed</button>{" "}
          </Link>
        </div>
      </div>
      <div>
        <Mgmatters />
        <Information />
      </div>
    </>
  );
}

export default Consult3;
