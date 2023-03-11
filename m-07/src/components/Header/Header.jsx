/** @format */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <>
      <nav className="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
        <Link style={{ display: "inline-block" }} to={"/"}>
          {" "}
          <img src={logo} />
        </Link>
      </nav>
    </>
  );
}

export default Header;
