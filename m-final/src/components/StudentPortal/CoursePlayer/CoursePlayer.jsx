/** @format */

import React, { useState } from "react";
import PageVideoDetiles from "./VideoWraper";
import { useGetVideosQuery } from "../../../features/api/videos/videosApi";
import { useParams } from "react-router-dom";
import CourseVideoLink from "./CourseVideoLink";
import VideoWraper from "./VideoWraper";

const CoursePlayer = () => {
  const { videoId } = useParams();
  // get all videos
  const { data: videos, isLoading, isError, isSuccess, error } = useGetVideosQuery();

  let content = null;
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
      content = videos.map((video, index) => <CourseVideoLink video={video} key={video.id} index={index} />);
    }
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <VideoWraper />

        {/* Right sidebur all video for the course */}
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
          {content}
        </div>
      </div>
    </>
  );
};

export default CoursePlayer;
