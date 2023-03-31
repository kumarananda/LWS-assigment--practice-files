/** @format */

import React, { useState } from "react";
import { useGetVideosQuery } from "../../../features/api/videos/videosApi";
import Modal from "../../ui/Modal/Modal";

import SingleVideo from "./SingleVideo";
import VideoAddForm from "./VideoForms/VideoAddForm";
import VideoEditForm from "./VideoForms/VideoEditForm";

const Videos = () => {
  const { data: videos, isLoading, isError, isSuccess } = useGetVideosQuery();

  // add video modal
  const [addStatus, setAddStatus] = useState(false);

  // edit video data and modal
  const [editVideo, setEditvideo] = useState({});
  const [editStatus, setEditStatus] = useState(false);

  // create content for videos
  let content = null;
  if (isLoading) {
    content = <h3>Loading...</h3>;
  }
  if (!isLoading && isError) {
    content = <h3>There was an error!</h3>;
  }
  if (!isLoading && !isError && isSuccess) {
    const videoLength = videos.length;
    if (videoLength === 0) {
      content = <h3>Video list is empty!</h3>;
    } else if (videoLength >= 0) {
      content = videos.map(video => <SingleVideo video={video} setEdit={setEditvideo} setStatus={setEditStatus} />);
    }
  }

  return (
    <>
      <div className="px-3 py-20 bg-opacity-10">
        <div className="w-full flex">
          <button onClick={() => setAddStatus(true)} className="btn ml-auto">
            Add Video
          </button>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="divide-y-1 text-base divide-gray-600 w-full">
            <thead>
              <tr>
                <th className="table-th">Video Title</th>
                <th className="table-th">Description</th>
                <th className="table-th">Action</th>
              </tr>
            </thead>
            {/* Single video items */}
            <tbody className="divide-y divide-slate-600/50">{content}</tbody>
          </table>
        </div>
      </div>

      {/* add form modal */}
      <Modal modalOpen={addStatus} setModalOpen={setAddStatus} MBoxWidth={900} outCickHide={false}>
        <VideoAddForm setStatus={setAddStatus} />
      </Modal>

      {/* edit form modal */}
      <Modal modalOpen={editStatus} setModalOpen={setEditStatus} MBoxWidth={900} outCickHide={false}>
        <VideoEditForm editVideo={editVideo} setStatus={setEditStatus} />
      </Modal>
    </>
  );
};

export default Videos;
