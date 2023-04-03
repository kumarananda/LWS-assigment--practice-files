/** @format */

import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useGetVideoQuery, useGetVideosQuery } from "../../../features/api/videos/videosApi";
import VideoDetiles from "./VideoDetiles";

const VideoWraper = () => {
  const { pathname } = useLocation();

  const { videoId } = useParams();

  // all videos
  const { data: videos, isLoading, isError, isSuccess, error } = useGetVideosQuery();

  // Single video
  const {
    data: sVideo,
    isLoading: isSVLoading,
    isError: isSVError,
    isSuccess: isSVSuccess,
    error: SVerror,
  } = useGetVideoQuery(videoId, {
    // skip: !videoId,
    skip: pathname === ("/course-player" || "/course-player/"),
  });

  //
  let content = null;
  // if (pathname === ("/course-player" || "/course-player/")) {
  if (!videoId) {
    //from all videos query
    if (isLoading) {
      content = "Loading...";
    }
    if (!isLoading && isError) {
      content = "Thare was an error!";
    }
    if (!isLoading && !isError && isSuccess) {
      const dataLength = videos.length;
      if (dataLength === 0) {
        content = "Video not found";
      }
      if (dataLength > 0) {
        // console.log("videos");
        content = <VideoDetiles video={videos[0]} />;
      }
    }
  }
  // if (pathname !== ("/course-player" || "/course-player/")) {
  if (videoId) {
    // from single query
    if (isSVLoading) {
      content = "Loading...";
    }
    if (!isSVLoading && isSVError) {
      content = "Thare was an error!";
    }
    if (!isSVLoading && !isSVError && isSVSuccess) {
      if (!sVideo?.id) {
        content = "Video not found";
      }
      if (sVideo?.id) {
        // console.log("SVideo");
        content = <VideoDetiles video={sVideo} />;
      }
    }
  }

  return content;
};

export default VideoWraper;
