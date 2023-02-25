/** @format */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Header() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="index.html">
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            {/* <Link href="#home" className="navHome" id="lws-home"> */}
            <Link to="/" className="navHome" id="lws-home">
              {" "}
              Home{" "}
            </Link>
            {/* <a href="cart.html" className="navCart" id="lws-cart"> */}
            <Link to="/cart" className="navCart" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">0</span>
            </Link>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar ends --> */}
    </>
  );
}

export default Header;
