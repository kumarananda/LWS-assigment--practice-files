/** @format */

import React from "react";
import AsideRelatedPosts from "../AsideRelatedPosts/AsideRelatedPosts";
import PostDetiles from "../PostDetiles/PostDetiles.jsx";

function PostPageCont() {
  return (
    <>
      <section className="post-page-container">
        {/* <!-- detailed post  --> */}
        <PostDetiles />

        {/* <!-- detailed post ends --> */}

        <AsideRelatedPosts />
      </section>
    </>
  );
}

export default PostPageCont;
