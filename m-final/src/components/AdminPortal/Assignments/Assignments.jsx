/** @format */

import React, { useEffect, useState } from "react";
import { useDeleteAssignmentMutation, useGetAssignmentsQuery } from "../../../features/api/assignments/assignmentsApi.js";
import SingleAssignment from "./SingleAssignment.jsx";
import Modal from "../../ui/Modal/Modal.jsx";
import AssignmentEditForm from "./AssForms/AssignmentEditForm.jsx";
import AssignmentAddForm from "./AssForms/AssignmentAddForm.jsx";
import { useGetVideosQuery } from "../../../features/api/videos/videosApi.js";
import DeleteConfirmModal from "../../ui/Modal/DeleteConfirmModal.jsx";
import Error from "../../ui/InfoMsg/Error.jsx";

const Assignments = () => {
  const { data: assignments, isLoading, isSuccess, isError } = useGetAssignmentsQuery();
  // video query //up components query for avoiding Loading delay
  const videoQuery = useGetVideosQuery();

  //
  const [deleteAssignment, { isLoading: deleteLoading, isError: deleteError, isSuccess: deleteSuccess, error: deleteData }] =
    useDeleteAssignmentMutation();

  // add modal status
  const [addStatus, setAddStatus] = useState(false);

  // edit modal status and data state
  const [editStatus, setEditStatus] = useState(false);
  const [editAss, setEditAss] = useState({});

  // set delete confirm modal
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [deleteID, setDeleteId] = useState("");

  let content = null;
  if (isLoading) {
    content = "Loading...";
  }
  if (!isLoading && isError) {
    content = "There was an error";
  }
  if (!isLoading && !isError && isSuccess) {
    const assLength = assignments.length;
    if (assLength === 0) {
      content = "No assignment found!";
    } else if (assLength >= 0) {
      content = assignments.map(assignment => (
        <SingleAssignment
          assignment={assignment}
          setEdit={setEditAss}
          setStatus={setEditStatus}
          setDeleteId={setDeleteId}
          setDeleteStatus={setDeleteStatus}
          key={assignment.id}
        />
      ));
    }
  }

  // *******
  // check required for if already assignment will not delete

  // handle Quiz delete
  const handleAssignmentDelete = delId => {
    deleteAssignment(delId);
  };

  // if delete successful modal will cloase
  useEffect(() => {
    if (deleteSuccess) {
      setDeleteStatus(false);
    }
  }, [deleteSuccess]);

  return (
    <>
      <div className="px-3 py-20 bg-opacity-10">
        <div className="w-full flex">
          <button onClick={() => setAddStatus(true)} className="btn ml-auto">
            Add Assignment
          </button>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="divide-y-1 text-base divide-gray-600 w-full">
            <thead>
              <tr>
                <th className="table-th">Title</th>
                <th className="table-th">Video Title</th>
                <th className="table-th">Mark</th>
                <th className="table-th">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-600/50">{content}</tbody>
          </table>
        </div>
        {/* will be update another type of alert */}
        <div className="formInfoMsg">
          {deleteError && <Error message={deleteData?.error ? "Server Error!" : deleteData?.data} />}
          {deleteLoading && <h5>Requesting...</h5>}
        </div>
      </div>

      {/* add form modal */}
      <Modal modalOpen={addStatus} setModalOpen={setAddStatus} MBoxWidth={900} outCickHide={false}>
        <AssignmentAddForm setStatus={setAddStatus} assignments={assignments} />
      </Modal>

      {/* edit form modal */}
      <Modal modalOpen={editStatus} setModalOpen={setEditStatus} MBoxWidth={850} outCickHide={false}>
        <AssignmentEditForm videoQuery={videoQuery} editAss={editAss} setStatus={setEditStatus} assignments={assignments} />
      </Modal>

      {/* delete modal */}
      <Modal modalOpen={deleteStatus} setModalOpen={setDeleteStatus} MBoxWidth={400} outCickHide={false}>
        <DeleteConfirmModal deleteID={deleteID} deleteAction={handleAssignmentDelete} setStatus={setDeleteStatus} />
      </Modal>
    </>
  );
};

export default Assignments;

/**
 *               <tr>
                <td className="table-td">Assignment 1 - Scoreboard Application</td>
                <td className="table-td">JavaScript Bangla Tutorial | JS AJAX | XMLHttp</td>
                <td className="table-td">100</td>
                <td className="table-td flex gap-x-2">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 hover:text-red-500 cursor-pointer transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </td>
              </tr>

              <tr>
                <td className="table-td">Assignment 1 - Scoreboard Application</td>
                <td className="table-td">JavaScript Bangla Tutorial | JS AJAX | XMLHttp</td>
                <td className="table-td">100</td>
                <td className="table-td flex gap-x-2">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 hover:text-red-500 cursor-pointer transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </td>
              </tr>

              <tr>
                <td className="table-td">Assignment 1 - Scoreboard Application</td>
                <td className="table-td">JavaScript Bangla Tutorial | JS AJAX | XMLHttp</td>
                <td className="table-td">100</td>
                <td className="table-td flex gap-x-2">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 hover:text-red-500 cursor-pointer transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </td>
              </tr>
 */
