import React, { useState } from "react";

export default function Faq() {
  const [openFaq1, setOpenFaq1] = useState(false);
  const [openFaq2, setOpenFaq2] = useState(false);
  const [openFaq3, setOpenFaq3] = useState(false);
  const [openFaq4, setOpenFaq4] = useState(false);
  const [openFaq5, setOpenFaq5] = useState(false);
  const [openFaq6, setOpenFaq6] = useState(false);

  const openToggle1 = () => {
    setOpenFaq1((current) => !current);
  };
  const openToggle2 = () => {
    setOpenFaq2((current) => !current);
  };
  const openToggle3 = () => {
    setOpenFaq3((current) => !current);
  };
  const openToggle4 = () => {
    setOpenFaq4((current) => !current);
  };
  const openToggle5 = () => {
    setOpenFaq5((current) => !current);
  };
  const openToggle6 = () => {
    setOpenFaq6((current) => !current);
  };

  return (
    <div id="faq">
      <h1 className="faq-sc-title">FAQ</h1>
      <div className="faq-container">
        <div className="faq-question" onClick={openToggle1}>
          <p className="faq-titles">How long is the program?</p>
          <img
            src="https://www.communitybible.com/wp-content/uploads/2023/02/chevron-right.png"
            alt="right"
            className={openFaq1 ? "chevron-open" : "chevron-collapsed"}
            width="30px"
          />
        </div>
        {openFaq1 && (
          <div className="faq-answer">
            <p className="faq-para">
              The Ministry Training Institute is a two-year investment.
            </p>
          </div>
        )}
      </div>

      <div className="faq-container">
        <div className="faq-question" onClick={openToggle2}>
          <p className="faq-titles">Is there an age requirement?</p>
          <img
            src="https://www.communitybible.com/wp-content/uploads/2023/02/chevron-right.png"
            alt="right"
            className={openFaq2 ? "chevron-open" : "chevron-collapsed"}
            width="30px"
          />
        </div>
        {openFaq2 && (
          <div className="faq-answer">
            <p className="faq-para">
              The program is designed for those 20-25 years old.
            </p>
          </div>
        )}
      </div>

      <div className="faq-container">
        <div className="faq-question" onClick={openToggle3}>
          <p className="faq-titles">Are residents paid?</p>
          <img
            src="https://www.communitybible.com/wp-content/uploads/2023/02/chevron-right.png"
            alt="right"
            className={openFaq3 ? "chevron-open" : "chevron-collapsed"}
            width="30px"
          />
        </div>
        {openFaq3 && (
          <div className="faq-answer">
            <p className="faq-para">
              Residents will earn $1200/month and receive free housing with
              other residents.
            </p>
          </div>
        )}
      </div>
      <div className="faq-container">
        <div className="faq-question" onClick={openToggle4}>
          <p className="faq-titles">What makes a good candidate?</p>
          <img
            src="https://www.communitybible.com/wp-content/uploads/2023/02/chevron-right.png"
            alt="right"
            className={openFaq4 ? "chevron-open" : "chevron-collapsed"}
            width="30px"
          />
        </div>
        {openFaq4 && (
          <div className="faq-answer">
            <p className="faq-para">
              We are looking for people with a clear call to ministry and a
              passion for God and the local church.
            </p>
          </div>
        )}
      </div>
      <div className="faq-container">
        <div className="faq-question" onClick={openToggle5}>
          <p className="faq-titles">
            Will this lead to a full-time job at CBC?
          </p>
          <img
            src="https://www.communitybible.com/wp-content/uploads/2023/02/chevron-right.png"
            alt="right"
            className={openFaq5 ? "chevron-open" : "chevron-collapsed"}
            width="30px"
          />
        </div>
        {openFaq5 && (
          <div className="faq-answer">
            <p className="faq-para">
              We hope so, but can't make that promise. What we do promise is
              that we will help you find the right ministry role for you.
            </p>
          </div>
        )}
      </div>
      <div className="faq-container">
        <div className="faq-question" onClick={openToggle6}>
          <p className="faq-titles">How do I apply?</p>
          <img
            src="https://www.communitybible.com/wp-content/uploads/2023/02/chevron-right.png"
            alt="right"
            className={openFaq6 ? "chevron-open" : "chevron-collapsed"}
            width="30px"
          />
        </div>
        {openFaq6 && (
          <div className="faq-answer">
            <p className="faq-para">
              Simply fill out the form above and someone from the program will
              be contacting you soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
