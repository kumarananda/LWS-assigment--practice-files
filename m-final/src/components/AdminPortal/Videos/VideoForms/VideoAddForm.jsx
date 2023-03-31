/** @format */

import React, { useState } from "react";
import "../../../../forms.css";
import { GoX } from "react-icons/go";

const VideoAddForm = ({ setStatus }) => {
  // Form data state // Video add form
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    views: "",
    url: "",
  });

  // Handle form data
  const handleFormData = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //Handle form submit // Video add form
  const HandleAddVideoSubmit = e => {
    e.preventDefault();
    const date = new Date();
    alert(JSON.stringify(formData));
  };
  return (
    <>
      <div className="fromWraper">
        <div className="fromHeader">
          <div className="formTitle">
            <h3>Add new video</h3>
          </div>

          <button onClick={() => setStatus(false)}>
            <GoX />
          </button>
        </div>
        <div className="fromBody">
          <form onSubmit={HandleAddVideoSubmit} method="POST">
            <div className="input_box">
              <label htmlFor="video_title">Title</label>
              <input value={formData.title} onChange={handleFormData} id="video_title" type="text" name="title" />
            </div>
            <div className="input_box">
              <label htmlFor="video-description">Description</label>
              <textarea value={formData.description} onChange={handleFormData} id="video-description" rows={"3"} name="description" />
            </div>
            <div className="input_box">
              <label htmlFor="video-url">Url</label>
              <input value={formData.url} onChange={handleFormData} id="video-url" type="text" name="url" />
            </div>
            <div className="input_box">
              <label htmlFor="video-duration">Duration</label>
              <input value={formData.duration} onChange={handleFormData} id="video-duration" type="text" name="duration" />
            </div>
            <div className="input_box">
              <label htmlFor="video-views">Views</label>
              <input value={formData.views} onChange={handleFormData} id="video-views" type="text" name="views" />
            </div>

            <div className="action_box">
              <button onClick={() => setStatus(false)} className="cancelBtn">
                Cancel
              </button>
              &nbsp;
              <button type="submit" className="submitBtn">
                Add Video
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VideoAddForm;
