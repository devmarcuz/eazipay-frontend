import React from "react";
import { HeaderLogo } from "./svgs/homeSvgs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="left-section">
          <Link className="logo">
            <HeaderLogo />
          </Link>
          <ul>
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
          </ul>
        </div>
        <div className="right-section">
          <Link>Log in</Link>
          <Link>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
