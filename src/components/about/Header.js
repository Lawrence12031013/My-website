import React from "react";
import Headshot from "./photo/Headshot.png";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="top">
          <div className="left">
            <h1 className="converense">
              Hi,
              <br />
              I'm Larence.
            </h1>
            <ul className="skill">
              <li>4 year+ Visual Design</li>
              <li>影片剪輯後製、業務開發</li>
              <li>HTML、CSS、JAVASCRIPT、SCSS、React</li>
              <li>2 year+ 海外工作</li>
            </ul>
          </div>
          <div className="right">
            <div className="bcg"></div>
            <img src={Headshot} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
