/** @format */

import React from "react";
import { Link } from "react-router-dom";
import lwsBlog from "../../assets/images/LWSBlog.svg";

function Header() {
  return (
    <>
      <nav className="py-4 border-b">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img src={lwsBlog} alt="search" />
            </Link>
          </div>
          {/* auth buttons , This will nonfunctional, just for nice looking */}
          <div className="auth-buttons">
            <button className="btn btn-primary">sign in</button>
            <button className="btn btn-outline">sign up</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
