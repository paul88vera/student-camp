import React from "react";

export default function Volunteer() {
  return (
    <div id="volunteer-sc">
      <div className="vol-container">
        <div className="vol-sc-container">
          <div className="vol-sc-right">
            <div className="vol-img">
              <img
                src="https://www.communitybible.com/wp-content/uploads/2023/03/sc-volunteer_sideImage-e1679317154686.png"
                className="vol-img-img"
                alt="volunteer at student camp"
              />
            </div>
          </div>
          <div className="vol-sc-para-box">
            <h4 className="vol-sc-title">VOLUNTEER</h4>
            <p className="vol-sc-para">
              Student Camp wouldn't be possible without servant-hearted and
              high-capacity leaders. If you love Jesus, love to have fun and
              have a desire to see students experience Jesus, Student Camp is
              for you. The primary need for Student Camp Volunteers is for camp
              counselors where you get the opportunity to directly lead and
              impact a small group of students. We invite you to submit your
              application below!
            </p>
            <br />
            <a
              href="https://portal.cbc.global/default.aspx?page=3545&event=13002"
              rel="noopener"
              target="_blank"
              className="vol-register-btn"
            >
              Middle School Volunteer
            </a>
            <a
              href="https://portal.cbc.global/default.aspx?page=3545&event=13001"
              rel="noopener"
              target="_blank"
              className="vol-register-btn"
            >
              High School Volunteer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
