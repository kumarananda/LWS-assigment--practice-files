/** @format */

import React from "react";
import { GoX } from "react-icons/go";
const ShowSubmitedModal = ({ assignment, setStatus }) => {
  const { title, repo_link, totalMark, status, createdAt, mark } = assignment || {};
  // console.log(assignment);
  return (
    <>
      <div className="fromWraper">
        {/* header */}
        <div className="fromHeader">
          <div className="formTitle">
            <h3>Submited Assignment Repo. Link</h3>
          </div>

          <button onClick={() => setStatus(false)}>
            <GoX />
          </button>
        </div>
        {/* body */}
        <div className="fromBody">
          <div className="input_box">
            <h4> Assingment Title </h4>
            <h5 htmlFor="question_title">{title}</h5>
          </div>
          <div className="input_box">
            <h4> Repo link </h4>
            <h5 htmlFor="question_title">{repo_link}</h5>
          </div>

          <div className="input_box flex justify-evenly">
            <div className="item">
              <h4>Total Mark</h4>
              <h5 htmlFor="question_title">{totalMark}</h5>
            </div>
            <div className="item">
              <h4>Received Mark</h4>
              <h5 htmlFor="question_title">{status === "pending" ? "pending" : mark}</h5>
            </div>
          </div>

          <div className="action_box">
            <button onClick={() => setStatus(false)} className="submitBtn">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowSubmitedModal;
