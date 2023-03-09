/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fatchSPost, patchSPost } from "../../features/sPost/sPostSlice";
import Loading from "../ui/Loading";
import NetError from "../ui/NetError";
import NotFound from "../ui/NotFound";
import Tags from "../ui/Tags";

function PostDetiles() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { sPost = {}, isLoading, isError, error } = useSelector(state => state.sPost);
  const { id, image, title, tags, likes, isSaved, createdAt, description } = sPost;

  const handleAddLike = () => {
    dispatch(patchSPost({ updateKey: "likes" }));
  };
  const handleSaved = () => {
    dispatch(patchSPost({ updateKey: "isSaved" }));
  };

  useEffect(() => {
    dispatch(fatchSPost({ id: postId }));
  }, [dispatch, postId]);

  let content;

  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <NetError>{error}</NetError>;
  }
  if (!isLoading && !isError && Object.keys(sPost).length === 0) {
    setTimeout(() => {
      content = <NotFound>Data not found</NotFound>;
    }, 500);
  }
  if (!isLoading && !isError && Object.keys(sPost).length > 0) {
    content = (
      <>
        <main className="post">
          <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
          <div>
            <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
              {title}
            </h1>
            <div className="tags" id="lws-singleTags">
              <Tags tags={tags} />
            </div>
            <div className="btn-group">
              {/* <!-- handle like on button click --> */}
              <button onClick={handleAddLike} className="like-btn" id="lws-singleLinks">
                <i className="fa-regular fa-thumbs-up"></i> {likes}
              </button>
              {/* <!-- handle save on button click --> */}
              {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
              <button onClick={handleSaved} className={`${isSaved ? "active" : ""} save-btn`} id="lws-singleSavedBtn">
                <i className="fa-regular fa-bookmark"></i> &nbsp;{isSaved ? "Saved" : "Save"}
              </button>
            </div>
            <div style={{ marginTop: "5px" }}>
              <p>{createdAt}</p>
            </div>
            <div className="mt-6">
              <p>{description}</p>
            </div>
          </div>
        </main>
      </>
    );
  }

  return content;
}

export default PostDetiles;
