import React from "react";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/My-website">Homepage</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
