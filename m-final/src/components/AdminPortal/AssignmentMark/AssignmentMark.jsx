/** @format */

import React from "react";
import { useGetAssignmentMarkQuery } from "../../../features/api/assignmentMark/assignmentMarkApi";
import SingleAssMark from "./SingleAssMark.jsx";

const AssignmentMark = () => {
  const { data: assMarks, isLoading, isError, isSuccess } = useGetAssignmentMarkQuery();

  let content = null;
  if (isLoading) {
    content = "Loading...";
  }
  if (!isLoading && isError) {
    content = "There was an error";
  }
  if (!isLoading && !isError && isSuccess) {
    const assMarksLength = assMarks.length;
    if (assMarksLength === 0) {
      content = "No mark data found!";
    } else if (assMarksLength >= 0) {
      content = assMarks.map(assMark => <SingleAssMark assMark={assMark} key={assMark.id} />);
    }
  }

  return (
    <>
      <div className="px-3 py-20 bg-opacity-10">
        <ul className="assignment-status">
          <li>
            Total <span>4</span>
          </li>
          <li>
            Pending <span>3</span>
          </li>
          <li>
            Mark Sent <span>1</span>
          </li>
        </ul>
        <div className="overflow-x-auto mt-4">
          <table className="divide-y-1 text-base divide-gray-600 w-full">
            <thead>
              <tr>
                <th className="table-th">Assignment</th>
                <th className="table-th">Date</th>
                <th className="table-th">Student Name</th>
                <th className="table-th">Repo Link</th>
                <th className="table-th">Mark</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-600/50">{content}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AssignmentMark;
