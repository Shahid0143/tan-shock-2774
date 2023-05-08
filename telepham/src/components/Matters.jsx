import React from "react";
import "../style/Matters.scss";

function Mgmatters() {
  return (
    <div className="about-us">
      <h1>Why choose Shahid Matters?</h1>
      <div className="about-us-main">
        <div className="card-about">
          <div>
            <img
              src="https://ik.manmatters.com/mw-img/wp-content/uploads/2020/08/2.png"
              alt=""
            />
          </div>
          <div>
            <h3>Free Doctor Consultation</h3>
            <p>
              The wellness ecosystem is broken and we intend to fix that. We
              believe that expert doctor advice and consult shouldn't be so
              hard, our expert dermatologists are always there to help you and
              give their advice.
            </p>
          </div>
        </div>
        <div className="card-about">
          <div>
            <img
              src="https://ik.manmatters.com/mw-img/wp-content/uploads/2020/08/4.png"
              alt=""
            />
          </div>
          <div>
            <h3>We Get You</h3>
            <p>
              Talking about personal health is hard. Often embarrassing. We get
              that. So we took ‘matters’ into our own hands; and created a place
              for all matters of man. Hair, skin, weight, sleep, performance and
              much more. We get you, and we get what matters to you.
            </p>
          </div>
        </div>
        <div className="card-about">
          <div>
            <img
              src="https://ik.manmatters.com/mw-img/wp-content/uploads/2020/08/3.png"
              alt=""
            />
          </div>
          <div>
            <h3>Expert Backed Solutions</h3>
            <p>
              With so many unreliable sources and searches, it's hard to decide
              whom to trust. Our solutions are trusted by experts, and are
              backed by science. We believe that wellness has a science behind
              it and we want to make it more accessible.
            </p>
          </div>
        </div>
        <div className="card-about">
          <div>
            <img
              src="https://ik.manmatters.com/mw-img/wp-content/uploads/2020/08/1.png"
              alt=""
            />
          </div>
          <div>
            <h3>Extended Care & Follow-Ups</h3>
            <p>
              Wellness is an actively pursued goal of being in a state of good
              health. We believe that compliance and discipline matter if you
              want to move towards wellbeing, and we get that it's not easy. We
              are here to handhold you and help you on this journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mgmatters;
