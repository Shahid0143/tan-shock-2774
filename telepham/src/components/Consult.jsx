import React from "react";
import "../style/Consult.scss";
import { Link, useNavigate } from "react-router-dom";
import Information from "./Info";
// import { toast } from "react-hot-toast";

function Consult() {
  const navigate = useNavigate();
  const handleconsult = () => {
    navigate("/consult2");
  };
  return (
    <>
      <div id="consultations" className="abu">
        <div className="background">
          <div className="consultations">
            <div>
              <img
                width={"84%"}
                src="http://onemg.gumlet.io/marketing/5e7341e1-0637-4703-a7dc-aa8ea920769b.png"
                alt=""
              />
            </div>
            <div>
              Free consultation and more benefits with Care Plan membership.
              <div className="careplan_button">
                <button>
                  <i>Care Plan</i>
                </button>
                <span style={{ color: "color: rgb(138, 36, 34)" }}>
                  Join Now!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="part2">
          <div className="right_top">
            <div className="for_font">
              <h1>Online doctor consultation with qualified doctors</h1>
              <h2>Starting at ₹199</h2>
            </div>
            <div className="pres">
              <div>
                <svg
                  viewBox="0 0 51 51"
                  width="51"
                  height="51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 51h51V0H0v51Z"
                    fill="#606060"
                    fill-opacity=".01"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25 43c-9.374 0-17-7.626-17-17 0-9.374 7.626-17 17-17 9.374 0 17 7.626 17 17 0 9.374-7.626 17-17 17m18-16.758c0-9.784-7.802-17.77-17.493-18.04V6.017h1.68a.507.507 0 0 0 0-1.017h-4.373a.508.508 0 0 0 0 1.017h1.679v2.185C14.802 8.472 7 16.458 7 26.242c0 7.616 4.729 14.14 11.394 16.788l-.915 2.27a.509.509 0 0 0 .47.7c.2 0 .39-.12.47-.318l.928-2.305a17.866 17.866 0 0 0 11.305 0l.929 2.305a.507.507 0 1 0 .94-.381l-.916-2.271C38.271 40.383 43 33.858 43 26.242"
                    fill="#3B3B3B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M38 26.5C38 33.956 32.18 40 25 40s-13-6.044-13-13.5S17.82 13 25 13s13 6.044 13 13.5"
                    fill="#FFB3A9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.526 27h-8.052a.487.487 0 0 1-.474-.5c0-.276.212-.5.474-.5h7.579v-8.5c0-.276.212-.5.473-.5.262 0 .474.224.474.5v9c0 .276-.212.5-.474.5M24.5 13c-.276 0-.5-.23-.5-.514v-1.972c0-.284.224-.514.5-.514s.5.23.5.514v1.972a.507.507 0 0 1-.5.514M24.5 42c-.276 0-.5-.23-.5-.514v-1.972c0-.284.224-.514.5-.514s.5.23.5.514v1.972a.507.507 0 0 1-.5.514M40.486 27h-1.972a.507.507 0 0 1-.514-.5c0-.276.23-.5.514-.5h1.972c.284 0 .514.224.514.5s-.23.5-.514.5M11.486 27H9.514A.507.507 0 0 1 9 26.5c0-.276.23-.5.514-.5h1.972c.284 0 .514.224.514.5s-.23.5-.514.5"
                    fill="#3B3B3B"
                  />
                </svg>
                <p>Talk within 30 min</p>
              </div>
              <div>
                <svg
                  viewBox="0 0 51 51"
                  width="51"
                  height="51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h51v51H0V0Z" fill="#606060" fill-opacity=".01" />
                  <path
                    d="M7 19h6.125v11.47h10.5v5.295H19.25V39l-5.542-3.235H7V19ZM26.542 35.765H28v-1.47l-1.458 1.47Z"
                    fill="#FFB3A9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.453 32h-3.906c-.303 0-.547-.224-.547-.5s.244-.5.547-.5h3.906c.303 0 .547.224.547.5s-.244.5-.547.5"
                    fill="#3B3B3B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M44 27.472h-8.62L26.809 33l.007-5.511H16V8h28v19.472Zm-15 8.764h-8.485L20.523 41l-6.061-4.782H6V17.14L14.42 17v7.84H9.949a.587.587 0 0 0-.581.594c0 .328.26.593.58.593h4.472v2.576h10.582l-.01 6.501L29 32.464v3.772ZM14.752 7v9.142L5 16.302v21.629h9.39L22.15 44l-.009-6.051h8.633v-5.552a.6.6 0 0 0-.039-.198l4.848-3.167H45V7H14.752Z"
                    fill="#3B3B3B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35.425 15h-11.85c-.318 0-.575-.223-.575-.5s.257-.5.575-.5h11.85c.318 0 .575.223.575.5s-.257.5-.575.5M34.379 21h-8.758c-.343 0-.621-.224-.621-.5s.278-.5.621-.5h8.758c.343 0 .621.224.621.5s-.278.5-.621.5"
                    fill="#3B3B3B"
                  />
                </svg>
                <p>Free follow up for 3 days</p>
              </div>
              <div>
                <svg
                  viewBox="0 0 51 51"
                  width="51"
                  height="51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.834 15h15.331c.461 0 .835.408.835.911v17.178c0 .503-.374.911-.835.911h-15.33c-.462 0-.835-.408-.835-.911V15.911c0-.503.373-.911.834-.911"
                    fill="#FFB3A9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.473 37h-7.946a.514.514 0 0 1-.527-.5c0-.276.236-.5.527-.5h7.946c.291 0 .527.224.527.5s-.236.5-.527.5M19.477 40h-3.954a.512.512 0 0 1-.523-.5c0-.276.234-.5.524-.5h3.953c.289 0 .523.224.523.5s-.234.5-.523.5M19.505 13h-4.01a.497.497 0 0 1-.495-.5c0-.277.222-.5.495-.5h4.01c.274 0 .495.223.495.5s-.221.5-.495.5"
                    fill="#3B3B3B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 41V9h21.26l.153 3.872c-.006.14.007.53.296.836.143.152.406.334.842.334H39V41H13Zm22-31 3 3h-2.785c-.047 0-.079-.014-.075-.005a.22.22 0 0 1-.024-.098l.003-.029L35 10Zm5 3.545c0-.024-.01-.046-.014-.069v-.188L34.953 8H12v34h27.986V13.613c.003-.023.014-.044.014-.068Z"
                    fill="#3B3B3B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 17.069a.07.07 0 0 1 .072-.069h4.305C25.823 17 27 18.122 27 19.5c0 1.379-1.177 2.5-2.623 2.5H20v-4.931Zm7.075 10.297 3.777-3.743a.506.506 0 0 0 .006-.71.49.49 0 0 0-.702-.006l-3.781 3.748-3.329-3.379h1.294c1.984 0 3.598-1.631 3.598-3.638 0-2.006-1.614-3.638-3.598-3.638h-4.276c-.587 0-1.064.483-1.064 1.076v11.532c0 .278.222.502.496.502a.498.498 0 0 0 .496-.502v-5.332h1.674c.015.02.023.044.042.063l3.958 4.019-3.816 3.782a.506.506 0 0 0-.007.71.494.494 0 0 0 .702.006l3.821-3.787 3.705 3.76a.492.492 0 0 0 .701 0 .505.505 0 0 0 .001-.708l-3.698-3.755Z"
                    fill="#3B3B3B"
                  />
                </svg>
                <p>Get a valid prescription</p>
              </div>
            </div>
            <div>
              <button onClick={handleconsult} className="consult_now_button">
                Start New Consultation
              </button>
            </div>
          </div>
          <div className="kiki">
            <img
              src="https://onemg.gumlet.io/marketing/793368e4-7232-45b3-9690-2fc81da12287.svg"
              alt=""
            />
          </div>
        </div>
        <div className="part3">
          <div>
            <h1>30L+</h1>
            <h3>Total Consultations</h3>
          </div>
          <div>
            <h1>3k+</h1>
            <h3>Daily Consultations</h3>
          </div>
          <div>
            <h1>22+</h1>
            <h3>Specialities</h3>
          </div>
        </div>

        <div className="DC-faq">
          <h1>Frequently Asked Questions</h1>
          <div>
            <h3>
              When will I get an answer to my query? What happens if I don’t get
              a response?
            </h3>
            <h4>
              If you opt for a free consult, then we make sure the doctor
              replies within 24 to 48 hours. In case of a paid consult, you will
              receive a reply within 2-4 business hours. However, if you do not
              get any response within the stipulated time, we will refund your
              money back into your account.
            </h4>
          </div>
          <div>
            <h3>Who are the consulting doctors?</h3>
            <h4>
              All the doctors are registered medical practitioners. Along with
              qualifying degrees - experience, research and track-record of
              practice are taken into account before a doctor is credentialed
              with Tata 1mg and is given access to answer patient queries.
            </h4>
          </div>
          <div>
            <h3>Will the doctor be able to resolve my issue?</h3>
            <h4>
              Our doctors will give you expert advice on your problem and help
              you identify next steps which may include further tests, medicine
              recommendation or lifestyle tips. Few cases require face-to-face
              examination and we do ask patients to share pictures or reports if
              they can, for a conclusive diagnosis.
            </h4>
          </div>
          <div>
            <h3>Is my consultation private with my doctor?</h3>
            <h4>
              Privacy of data is one of the fundamental human rights and we at
              Tata 1mg understand that. All your medical history and online
              consultation with us are completely private and confidential. We
              are compliant with industry standards to ensure your consultations
              are securely stored.
            </h4>
          </div>
          <div>
            <h3>For how long is the consultation valid?</h3>
            <h4>
              In the case of a paid consult, you can follow-up with your doctor
              for up to 3 days. In case you opt for a free consult, follow-up
              questions are valid for one day only.
            </h4>
          </div>
          <div>
            <h3>Do you have a refund policy?</h3>
            <h4>
              We have a “take-it-easy” policy. If for any reason you’re not
              convinced with your online consultation, you can write to us at
              contact@1mgdoctors.com and we will review the consult with the
              doctor - seeking clarifications on your queries that were
              answered. 100% refund will be given in genuine cases.
            </h4>
          </div>
        </div>

        <div className="DC-confident">
          <div>
            <img src="https://www.1mg.com/images/confidential.svg" alt="" />
            <h4>100% Confidential</h4>
            <p>
              All advice & consultations are completely confidential. You can
              also delete chats whenever you want.
            </p>
          </div>
          <div>
            <img src="https://www.1mg.com/images/certified.svg" alt="" />
            <h4>Certified Doctors</h4>
            <p>
              We offer quality healthcare through our network of certified and
              experienced doctors.
            </p>
          </div>
          <div>
            <img src="https://www.1mg.com/images/convenience.svg" alt="" />
            <h4>Convenience</h4>

            <p>
              Forget the hassle of long queues and rush hour. Seek expert
              opinion anytime, anywhere.
            </p>
          </div>
          <div>
            <img src="https://www.1mg.com/images/costEffective.svg" alt="" />

            <h4>Cost Effective</h4>

            <p>
              We provide medical assistance on non urgent queries for free. Fee
              starting at ₹50 for faster response to queries.
            </p>
          </div>
        </div>
        <div className="DC-doctor">
          <img src="https://www.1mg.com/images/oc_doctor.svg" alt="" />
          <h2>Are you a doctor ?</h2>
          <h3>
            Be a part of our panel of specialists and connect with your patients
            from anywhere.
          </h3>
          <button>JOIN US</button>
        </div>
      </div>
      <Information />
    </>
  );
}

export default Consult;
