/** @format */

import React from "react";

function Tags({ tags = [] }) {
  const tagsElement = tags.length > 0 && tags.map((tag, i) => <span key={i}>&nbsp;{"#" + tag},</span>);

  return <>{tagsElement}</>;
}

export default Tags;
