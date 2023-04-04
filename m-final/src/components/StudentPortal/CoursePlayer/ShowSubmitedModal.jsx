/** @format */

import React from "react";
import { GoX } from "react-icons/go";
const ShowSubmitedModal = ({ assignment, setStatus }) => {
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
            <label htmlFor="question_title">{assignment?.repo_link}</label>
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
