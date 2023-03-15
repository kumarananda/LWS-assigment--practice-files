/** @format */

import React from "react";
import "./Loading.css";

function Loading({ w = 40, h = 20 }) {
  return <p className="loading" style={{ width: `${w}px`, height: `${h}px` }}></p>;
}

export default Loading;
