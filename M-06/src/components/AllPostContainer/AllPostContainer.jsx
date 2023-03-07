/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fatchPosts } from "../../features/posts/postsSlice";
import HomePostItem from "../HomePostItem/HomePostItem";

import Loading from "../ui/Loading";

function AllPostContainer() {
  const dispatch = useDispatch();
  const { posts, isLoading, isError, error } = useSelector(state => state.posts);

  let content;

  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError && posts.length === 0) {
    content = <div>No post found</div>;
  }
  if (!isLoading && !isError && posts.length > 0) {
    content = posts.map(post => <HomePostItem post={post} key={post.id} />);
  }

  useEffect(() => {
    dispatch(fatchPosts());
  }, [dispatch]);
  return (
    <>
      {/* <!-- posts container  --> */}
      <main className="post-container" id="lws-postContainer">
        {content}
      </main>
    </>
  );
}

export default AllPostContainer;
