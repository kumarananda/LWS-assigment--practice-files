/** @format */

import React, { useState } from "react";
import { useGetQuizzessQuery } from "../../../features/api/quizzes/quizzesApi";
import { useGetVideosQuery } from "../../../features/api/videos/videosApi";
import Modal from "../../ui/Modal/Modal";
import QuizAddForm from "./QuizeForms/QuizAddForm";
import QuizEditForm from "./QuizeForms/QuizEditForm";
import SingleQuiz from "./SingleQuiz";

const Quizzes = () => {
  const { data: quizzes, isLoading, isError, isSuccess } = useGetQuizzessQuery();

  // video query //up components query for avoiding Loading delay
  const videoQuery = useGetVideosQuery();

  // add video modal
  const [addStatus, setAddStatus] = useState(false);

  // edit video data and modal
  const [editQuiz, setEditQuiz] = useState({});
  const [editStatus, setEditStatus] = useState(false);

  // create content for quizzes
  let content = null;
  if (isLoading) {
    content = <h3>Loading...</h3>;
  }
  if (!isLoading && isError) {
    content = <h3>There was an error!</h3>;
  }
  if (!isLoading && !isError && isSuccess) {
    const quizLength = quizzes.length;
    if (quizLength === 0) {
      content = <h3>Video list is empty!</h3>;
    } else if (quizLength >= 0) {
      content = quizzes.map(quiz => <SingleQuiz quiz={quiz} setEdit={setEditQuiz} setStatus={setEditStatus} key={quiz.id} />);
    }
  }
  return (
    <>
      <div className="px-3 py-20 bg-opacity-10">
        <div className="w-full flex">
          <button onClick={() => setAddStatus(true)} className="btn ml-auto">
            Add Quiz
          </button>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="divide-y-1 text-base divide-gray-600 w-full">
            <thead>
              <tr>
                <th className="table-th">Question</th>
                <th className="table-th">Video</th>
                <th className="table-th justify-center">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-600/50"> {content}</tbody>
          </table>
        </div>
      </div>
      {/* add form modal */}
      <Modal modalOpen={addStatus} setModalOpen={setAddStatus} MBoxWidth={900} outCickHide={false}>
        <QuizAddForm setStatus={setAddStatus} />
      </Modal>
      {/* edit form modal */}
      <Modal modalOpen={editStatus} setModalOpen={setEditStatus} MBoxWidth={900} outCickHide={false}>
        <QuizEditForm videoQuery={videoQuery} editQuiz={editQuiz} setStatus={setEditStatus} />
      </Modal>
    </>
  );
};

export default Quizzes;
