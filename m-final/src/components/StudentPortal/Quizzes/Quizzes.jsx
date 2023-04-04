/** @format */

import React, { useState } from "react";
import { useGetQuizForVideoQuery } from "../../../features/api/quizzes/quizzesApi";
import { useParams } from "react-router-dom";
import SingleQuiz from "./SingleQuiz";

const Quizzes = () => {
  const { videoId } = useParams();
  // use quiz query
  const { data: quizdata, isLoading, isSuccess, isError } = useGetQuizForVideoQuery(videoId);

  console.log(quizdata);

  let content = null;
  let videoTitle = undefined;
  if (isLoading) {
    content = "Loading...";
  }
  if (!isLoading && isError) {
    content = "Thare is an error!";
  }
  if (!isLoading && !isError && isSuccess) {
    if (!quizdata?.length) {
      content = "Quiz not found for this video";
    } else if (quizdata?.length > 0) {
      videoTitle = quizdata[0].video_title;
      content = quizdata.map((quiz, index) => <SingleQuiz quiz={quiz} key={quiz.id} index={index} />);
    }
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">{videoTitle}</h1>
          <p className="text-sm text-slate-200">Each question contains 5 Mark</p>
        </div>
        <div className="space-y-8">{content}</div>

        <button className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95">Submit</button>
      </div>
    </>
  );
};

export default Quizzes;

const saveOnly = () => {
  return (
    <>
      <div className="quiz">
        <h4 className="question">Quiz 2 - Which of the following is an example of a situation where you would use the Debounce function?</h4>
        <form className="quizOptions">
          {/* Option 1 */}
          <label htmlFor="option1_q2">
            <input type="checkbox" id="option1_q2" />A search bar where the results are displayed as you type.
          </label>

          {/* Option 2 */}
          <label htmlFor="option2_q2">
            <input type="checkbox" id="option2_q2" />A button that performs an action when clicked.
          </label>

          {/* Option 3 */}
          <label htmlFor="option3_q2">
            <input type="checkbox" id="option3_q2" />
            An animation that plays when a user hovers over an element.
          </label>

          {/* Option 4 */}
          <label htmlFor="option4_q2">
            <input type="checkbox" id="option4_q2" />
            All of the above.
          </label>
        </form>
      </div>
    </>
  );
};
