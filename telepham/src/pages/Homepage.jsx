import React from "react";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div>
      <div id="home">
        <div className="s1">
          <h2>The place where your health matters most.</h2>
          <h4>Better health starts here.</h4>
          <button>MORE ABOUT US</button>
        </div>
        <div className="s2">
          <img
            src="https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?cs=srgb&dl=pexels-pixabay-159211.jpg&fm=jpg"
            alt="oso"
          />
        </div>
      </div>

      <div>
        <div className="s3">
          <h4>Best-in-class</h4>
          <h1>Healthcare Services</h1>
          <p className="p1">
            They are very soft and don't leave any pain. He likes to take care
            of his family. The exercise will come to fruition.
          </p>
        </div>
      </div>

      <div id="c1">
        <div className="pic">
          <img
            width="20%"
            src="https://media.istockphoto.com/id/1139549801/vector/stethoscope-heart-icon.jpg?s=612x612&w=0&k=20&c=qEJ7fFxWkok8j7FYYj4NwAlHSgqsw-azZz7c3IQJ4KI="
            alt=""
          />
          <p>Online Consultation</p>
        </div>
        <div className="pic">
          <img
            width="20%"
            src="https://thumbs.dreamstime.com/b/hospital-line-icon-hospital-line-icon-outline-vector-sign-linear-style-pictogram-isolated-white-medical-building-symbol-logo-108895779.jpg"
            alt=""
          />
          <p style={{ lineHeight: "1.1" }}>Hospital</p>
        </div>
        <div className="pic">
          <img
            width="20%"
            src="https://thumbs.dreamstime.com/b/vaccine-icon-drawing-outline-style-contour-syringe-sign-needle-medication-injection-medical-symbol-vaccination-230493082.jpg"
            alt=""
          />
          <p>Medicines</p>
        </div>
        <div className="pic">
          <img
            width="20%"
            src="https://assets.dryicons.com/uploads/icon/svg/5815/0b3868fb-c613-4a2b-b40b-9ea99a8dd6ed.svg"
            alt=""
          />
          <p>Pathology Tests</p>
        </div>
        <div className="pic">
          <img
            width="20%"
            src="https://as2.ftcdn.net/v2/jpg/02/10/39/05/1000_F_210390526_OrPhu18qm636h5VDCGPK4Ss0JtSqYkXm.jpg"
            alt=""
          />
          <p>Nursing</p>
        </div>
        <div className="pic">
          <img
            width="20%"
            src="https://en.pimg.jp/060/999/111/1/60999111.jpg"
            alt=""
          />
          <p>Emergency</p>
        </div>
      </div>

      <div id="d1">
        <div className="kk">
          <h1>5+</h1>
          <p>Year of Experiences</p>
        </div>
        <div className="kk">
          <h1>300+</h1>
          <p className="ks">Healthcare Practition</p>
        </div>
        <div className="kk">
          <h1>500+</h1>
          <p className="ks">Satisfied Clients</p>
        </div>
        <div className="kk">
          <h1>100+</h1>
          <p className="ks">Awards</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
