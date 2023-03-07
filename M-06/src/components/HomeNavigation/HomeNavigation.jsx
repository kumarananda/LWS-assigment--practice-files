/** @format */

import React from "react";
import { Link } from "react-router-dom";

function HomeNavigation() {
  return (
    <>
      {/* Go Home / Go Back  */}
      <div className="container mt-8">
        <Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome">
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>
    </>
  );
}

export default HomeNavigation;
