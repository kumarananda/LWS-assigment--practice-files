/** @format */

import React from "react";

import PostItem from "../PostItem/PostItem";

function AllPostContainer() {
  return (
    <>
      {/* <!-- posts container  --> */}
      <main className="post-container" id="lws-postContainer">
        {/* <!-- single post --> */}

        <PostItem />
        <PostItem />
      </main>
    </>
  );
}

export default AllPostContainer;
