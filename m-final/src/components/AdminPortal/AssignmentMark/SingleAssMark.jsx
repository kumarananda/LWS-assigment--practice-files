/** @format */

import React, { useState } from "react";
import { showDateDetails } from "../../../utils/date";

const SingleAssMark = ({ assMark }) => {
  const { id, student_id, student_name, assignment_id, title, createdAt, totalMark, mark, repo_link, status } = assMark || {};

  // mark assignment mark state
  const [addMark, setAddMark] = useState("");

  // handle mark submit
  const handleMarkSubmit = e => {
    e.preventDefault();
    alert(addMark);
  };

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
              <input type="number" className="hideNumberArrow" min="0" max={totalMark} value={addMark} onChange={e => setAddMark(e.target.value)} />
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

/**
 * {
    id:	1,
student_id:	2,
student_name:	"Saad Hasan",
assignment_id:	1,
title:	"Assignment 1 - Implement Debounce Function",
createdAt:	"2021-01-15T15:17:01.727Z",
totalMark:	100,
mark	:0,
repo_link:	"https://github.com/Learn-with-Sumit/assignment-1",
status	:"pending"}
 */
