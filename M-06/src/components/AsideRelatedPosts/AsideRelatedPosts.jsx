/** @format */

import React from "react";
import { useSelector } from "react-redux";
import RelatedPosts from "../RelatedPosts/RelatedPosts.jsx";
import Loading from "../ui/Loading.jsx";
import NetError from "../ui/NetError.jsx";
import NotFound from "../ui/NotFound.jsx";

function AsideRelatedPosts() {
  const { rPosts, isLoading, isError, error } = useSelector(state => state.rPosts);
  const { sPost } = useSelector(state => state.sPost);

  // data fetch filter by main post id  is used.
  // but if not use server filter by main post id
  //    then filter will be applied with Array.map return with !== ondition

  let content;

  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <NetError>{error}</NetError>;
  }
  if (!isLoading && !isError && rPosts.length === 0) {
    setTimeout(() => {
      content = <NotFound>No post found</NotFound>;
    }, 500);
  }
  if (!isLoading && !isError && rPosts.length > 0) {
    content = rPosts.map(rPost => {
      if (rPost.id !== sPost.id) {
        return <RelatedPosts rPost={rPost} key={rPost.id} />;
      } else {
        return false;
      }
    });
  }
  // Object.keys(myObj).length

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
