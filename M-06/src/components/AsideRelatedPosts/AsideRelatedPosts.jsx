/** @format */

import React from "react";
import { useSelector } from "react-redux";
import RelatedPosts from "../RelatedPosts/RelatedPosts.jsx";

function AsideRelatedPosts() {
  const { rPosts } = useSelector(state => state.rPosts);
  const { sPost } = useSelector(state => state.sPost);

  // data fetch filter by main post id  is used.
  // but if not use server filter by main post id
  //    then filter will be applied with Array.map return with !== ondition
  const content =
    rPosts.length > 0 &&
    rPosts.map(rPost => {
      if (rPost.id !== sPost.id) {
        return <RelatedPosts rPost={rPost} key={rPost.id} />;
      } else {
        return false;
      }
    });

  return (
    <>
      <aside>
        <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
          Related Posts
        </h4>
        <div className="space-y-4 related-post-container">{content}</div>
      </aside>
    </>
  );
}

export default AsideRelatedPosts;
