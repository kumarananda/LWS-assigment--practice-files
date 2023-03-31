/** @format */

import React from "react";
import Videos from "../../../components/AdminPortal/Videos/Videos";
import Header from "../../../components/Header/Header";

const VideosPage = () => {
  return (
    <>
      <Header />
      <div className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <Videos />
        </div>
      </div>
    </>
  );
};

export default VideosPage;
