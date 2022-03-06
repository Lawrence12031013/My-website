import React from "react";
import Headshot from "./photo/Headshot.png";

const Header = () => {
  return (
    <div>
      <div className="top">
        <div className="left">
          <h1 className="converense">
            Hi,
            <br />
            I'm Larence.
          </h1>
          <ul className="skill">
            <li>4 year+ Visual Design 工作經驗</li>
            <li>影片剪輯後製能力、業務開發能力</li>
            <li>前端HTML、CSS、JAVASCRIPT、SASS技能</li>
            <li>前端框架React完成課程作品</li>
            <li>2 year+ 海外工作經驗</li>
          </ul>
        </div>
        <div className="right">
          <div className="bcg"></div>
          <img src={Headshot} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
