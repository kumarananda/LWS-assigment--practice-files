/** @format */

import React from "react";

const VideoQuizResult = ({ result }) => {
  console.log(result);
  const { totalQuiz, totalCorrect, totalWrong, mark, totalMark } = result || {};
  return (
    <div className="w-full flex justify-center">
      <div className="flex w-2/4 justify-start">
        <div className="text-xl">
          <h6>Total quiz : {totalQuiz}</h6>

          <h6>Correct answer : {totalCorrect}</h6>

          <h6>Worng answer : {totalWrong}</h6>

          <h6>Total Mark : {totalMark}</h6>

          <h6>Achieved Mark : {mark}</h6>
        </div>
      </div>
    </div>
  );
};

export default VideoQuizResult;
