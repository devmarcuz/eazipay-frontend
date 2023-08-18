import React, { useState } from "react";
import { HeaderLogo } from "./svgs/homeSvgs";
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [bar, setBar] = useState(false);

  return (
    <div className="header">
      <div className="header-container">
        <div className="left-section">
          <Link className="logo">
            <HeaderLogo />
          </Link>
          <ul className={`${bar && "display"}`}>
            <div className="bar" onClick={() => setBar(!bar)}>
              <FaTimes />
            </div>
            <li>
              <Link>Individual</Link>
            </li>
            <li>
              <Link>Buisness</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
            <li>
              <Link>Set your payroll</Link>
            </li>
            <div className="btn">Log in</div>
            <div className="btn">Register</div>
          </ul>
        </div>
        <div className="right-section">
          <Link>Log in</Link>
          <Link>Register</Link>
        </div>
        <div className="bar" onClick={() => setBar(!bar)}>
          <HiMenuAlt2 />
        </div>
      </div>
    </div>
  );
};

export default Header;
