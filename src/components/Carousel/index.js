import React, { useState } from "react";

const images = [
  {
    title: "SQUAD WARS",
    desc: "Every student at camp will be assigned to a Squad that is led by a Squad Leader. They will compete head to head in high-energy, fast-paced Squad Wars each day. At the end of the week only one squad will be crowned the Squad Wars Champion!",
    img: "https://www.communitybible.com/wp-content/uploads/2023/03/CampDay_SquadWars-e1679316557932.png",
  },
  {
    title: "WORSHIP",
    desc: "Throughout the week at Student Camp your students will be led in worship by special guest worship teams from across the country. This summer our camp bands will be Strength to Stand Worship (Middle School Camp) and Rush of Fools (High School Camp).",
    img: "https://www.communitybible.com/wp-content/uploads/2023/03/CampDay_Worship-e1679316502782.png",
  },
  {
    title: "THEME",
    desc: "This summer at Student Camp our theme is Relentless Pursuit. Our student pastors and guest speakers at camp will encourage and equip students to know how they can pursue a relationship with Jesus relentlessly in each season of their life.",
    img: "https://www.communitybible.com/wp-content/uploads/2023/03/CampDay_Teaching-e1679316529530.png",
  },
];

export default function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(images[0]);

  const cycleObjects = () => {
    const currentIndex = images.indexOf(currentImageIndex);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentImageIndex(images[nextIndex]);
  };

  const myStyle2 = {
    position: "absolute",
    zIndex: "0",
    opacity: ".4",
  };
  const myStyle3 = {
    position: "absolute",
    zIndex: "0",
    opacity: ".2",
  };
  const myStyle = {
    width: "100%",
    maxWidth: "500px",
  };

  return (
    <div id="carousel-sc">
      <div className="carousel-sc-container">
        <h1 className="carousel-sc-title middle-title">
          {currentImageIndex.title}
        </h1>
        <p className="carousel-sc-desc">{currentImageIndex.desc}</p>
        <button className="carousel-btn vol-learn-btn" onClick={cycleObjects}>
          View Next
        </button>
        <br />
        <h4 className="register-title">Register for your camp:</h4>
        <a
          href="https://portal.cbc.global/default.aspx?page=3545&event=12967"
          target="_blank"
          className="vol-register-btn"
        >
          Middle School Student
        </a>
        <br />
        <a
          href="https://portal.cbc.global/default.aspx?page=3545&event=12996"
          target="_blank"
          className="vol-register-btn"
        >
          High School Student
        </a>
      </div>
      <div className="sc-img-container">
        <img
          src={currentImageIndex.img}
          alt="Currents"
          className="carousel-sc-img img-center"
          style={myStyle}
          onClick={cycleObjects}
        />
        <img
          src={currentImageIndex.img}
          alt="no"
          style={myStyle2}
          className="img-right"
          onClick={cycleObjects}
        />
        <img
          src={currentImageIndex.img}
          alt="no"
          style={myStyle3}
          onClick={cycleObjects}
          className="img-left"
        />
      </div>
    </div>
  );
}
