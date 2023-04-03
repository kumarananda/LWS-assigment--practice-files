/** @format */

import React, { useEffect, useState } from "react";
import { showDateDetails } from "../../../utils/date";
import { useUpdateAssignmentMarkMutation } from "../../../features/api/assignmentMark/assignmentMarkApi";

const SingleAssMark = ({ assMark }) => {
  const { id, student_id, student_name, assignment_id, title, createdAt, totalMark, mark, repo_link, status } = assMark || {};

  const [updateAssignmentMark, { isLoading, isSuccess, isError }] = useUpdateAssignmentMarkMutation();
  // mark assignment mark state
  const [addMark, setAddMark] = useState("");

  // handle mark submit
  const handleMarkSubmit = e => {
    e.preventDefault();
    updateAssignmentMark({ id, mark: addMark });
  };

  useEffect(() => {
    if (isError) {
      alert("Mark Update filed!");
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      // alert("Mark Update Successful.");
    }
  }, [isSuccess]);

  return (
    <>
      <tr>
        <td className="table-td">{title}</td>
        <td className="table-td">{showDateDetails(createdAt)}</td>
        <td className="table-td">{student_name}</td>
        <td className="table-td">{repo_link}</td>
        {status === "pending" && (
          <td className="table-td">
            <form className="input-mark" onSubmit={handleMarkSubmit}>
              <input
                required
                type="number"
                className="hideNumberArrow"
                min="0"
                max={totalMark}
                value={addMark}
                onChange={e => setAddMark(e.target.value)}
              />
              <button className="markSubmitBtn" type="submit">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </button>
            </form>
          </td>
        )}
        {status === "published" && <td className="table-td">{mark}</td>}
      </tr>
    </>
  );
};

export default SingleAssMark;
