/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fatchPosts } from "../../features/posts/postsSlice";
import HomePostItem from "../HomePostItem/HomePostItem";
import Loading from "../ui/Loading";
import NetError from "../ui/NetError";
import NotFound from "../ui/NotFound";

function AllPostContainer() {
  const dispatch = useDispatch();
  const { posts, isLoading, isError, error } = useSelector(state => state.posts);
  const { filterBy, sortBy } = useSelector(state => state.filter);

  const handlefilter = data => {
    if (filterBy === "all") {
      return true;
    } else if (filterBy === "saved") {
      return data.isSaved;
    }
  };

  const timestamp = date => {
    return new Date(date).getTime();
  };

  const handleSort = (item1, item2) => {
    if (sortBy === "") {
      return true;
    } else if (sortBy === "newest") {
      return timestamp(item2.createdAt) - timestamp(item1.createdAt);
    } else if (sortBy === "most_liked") {
      return item2.likes - item1.likes;
    }
  };

  let content;

  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <NetError>{error}</NetError>;
  }
  if (!isLoading && !isError && posts.length === 0) {
    content = <NotFound>No post found</NotFound>;
  }
  if (!isLoading && !isError && posts.length > 0) {
    content = posts
      .filter(handlefilter)
      .sort(handleSort)
      .map(post => <HomePostItem post={post} key={post.id} />);
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
