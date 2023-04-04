/** @format */

import React, { useEffect, useState } from "react";
import { GoX } from "react-icons/go";
import { useAddAssignmentMarkMutation } from "../../../features/api/assignmentMark/assignmentMarkApi";

const AssSubmitModal = ({ student_id, student_name, assignment, setStatus, assMarkRefetch, assRefetch }) => {
  const [addAssignmentMark, { isLoading, isError, isSuccess }] = useAddAssignmentMarkMutation();

  // input state
  const [repoLink, setRepoLink] = useState("");

  const HandleAssignmentSubmit = e => {
    e.preventDefault();
    if (!repoLink) {
      alert("Input Git Repo Link");
    } else {
      let createdAt = new Date();
      let data = {
        student_id,
        student_name,
        assignment_id: assignment.id,
        title: assignment.title,
        repo_link: repoLink,
        totalMark: assignment.totalMark,
        status: "pending",
        mark: "",
        createdAt,
      };
      addAssignmentMark(data);
    }
  };
  useEffect(() => {
    if (isError) {
      alert("error");
    }
  }, [isError]);

  // if success modal off
  useEffect(() => {
    if (isSuccess) {
      assMarkRefetch();
      assRefetch();
      setStatus(false);
    }
  }, [isSuccess]);

  return (
    <>
      <div className="fromWraper">
        <div className="fromHeader">
          <div className="formTitle">
            <h3>Assignment Submit</h3>
          </div>

          <button onClick={() => setStatus(false)}>
            <GoX />
          </button>
        </div>
        <div className="fromBody">
          <form onSubmit={HandleAssignmentSubmit} method="POST">
            <div className="input_box">
              <label htmlFor="question_title">Question</label>
              <input value={repoLink} onChange={e => setRepoLink(e.target.value)} id="repo_link" name="repo_link" placeholder="Git Repo Link" />
            </div>

            <div className="action_box">
              <button onClick={() => setStatus(false)} className="cancelBtn">
                Cancel
              </button>
              &nbsp;
              <button type="submit" className="submitBtn">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AssSubmitModal;
