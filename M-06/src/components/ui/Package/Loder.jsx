/** @format */

import Loader from "react-spinner-loader";

// import React, { useState } from "react";

function LoderSpinner() {
  //   const [loader, setLoader] = useState(true);
  return (
    <div>
      <Loader
        show={true}
        type="inline"
        spinnerSize="60px"
        spinnerStyle={{
          primary: "#f8fafc",
          secondary: "#0b8b24",
        }}
      />
    </div>
  );
}

export default LoderSpinner;
