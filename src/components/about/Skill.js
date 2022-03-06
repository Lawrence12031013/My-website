import React from "react";
import Htmllogo from "./photo/HTML-logo-01.png";
import Csslogo from "./photo/CSS-logo-01.png";
import Jslogo from "./photo/JS-logo-01.png";
import Reactlogo from "./photo/React-logo-01.png";
import Ailogo from "./photo/AI-logo-01.png";
import Pslogo from "./photo/PS-logo-01.png";
import Prlogo from "./photo/PR-logo-01.png";

const Skill = () => {
  //   const slideshow = document.querySelector(".slideshow");

  //   setInterval(() => {
  //     const firstIcon = slideshow.firstElementChild;

  //     firstIcon.classList.add("fade-out");

  //     const thirdIcon = slideshow.children[4];

  //     thirdIcon.classList.add("light");

  //     thirdIcon.previousElementSibling.classList.remove("light");

  //     setTimeout(() => {
  //       slideshow.removeChild(firstIcon);

  //       slideshow.appendChild(firstIcon);

  //       setTimeout(() => {
  //         firstIcon.classList.remove("fade-out");
  //       }, 500);
  //     }, 500);
  //   }, 3000);

  return (
    <div className="slideshow">
      <span className="logo">
        <img src={Htmllogo} alt="Hlogo" />
      </span>

      <span className="logo">
        <img src={Csslogo} alt="Clogo" />
      </span>

      <span className="logo">
        <img src={Jslogo} alt="Jslogo" />
      </span>

      <span className="logo light">
        <img src={Reactlogo} alt="Reactlogo" />
      </span>

      <span className="logo">
        <img src={Ailogo} alt="Ailogo" />
      </span>

      <span className="logo">
        <img src={Pslogo} alt="Pslogo" />
      </span>

      <span className="logo">
        <img src={Prlogo} alt="Prlogo" />
      </span>
    </div>
  );
};

function slideShow() {}

export default Skill;
