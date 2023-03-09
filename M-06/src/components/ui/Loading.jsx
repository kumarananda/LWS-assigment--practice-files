/** @format */

import React from "react";
import LoderSpinner from "./Package/Loder";
import "./uiStyle.css";

function Loading() {
  return (
    <div className="loader ">
      <LoderSpinner />
    </div>
  );
}

export default Loading;
