/** @format */

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import cardImage from "../../assets/images/git.webp";
import { fatchSPost } from "../../features/sPost/sPostSlice";
import Tags from "../ui/Tags";

function RelatedPosts({ rPost = {} }) {
  const { id, image, title, tags, likes, isSaved, createdAt, description } = rPost;

  return (
    <>
      <div className="card">
        <Link to={`/post/${id}`}>
          <img src={image} className="card-image" alt="" />
        </Link>
        <div className="p-4">
          <Link to={`/post/${id}`} className="text-lg post-title lws-RelatedPostTitle">
            {title}
          </Link>
          <div className="mb-0 tags">
            <Tags tags={tags} />
          </div>
          <p>{createdAt}</p>
        </div>
      </div>
    </>
  );
}

export default RelatedPosts;
