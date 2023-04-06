/** @format */

import React from "react";

const VideoQuizResult = ({ result }) => {
  console.log(result);
  const { totalQuiz, totalCorrect, totalWrong, mark, totalMark } = result || {};
  return (
    <div className="w-full flex justify-center">
      <div className="flex w-2/4 justify-start">
        <div className="text-xl">
          <h6>Your quiz result for this video</h6>
          <br />
          <h5>Total quiz : {totalQuiz}</h5>
          <h5>Correct answer : {totalCorrect}</h5>
          <h5>Worng answer : {totalWrong}</h5>
          <h5>Total Mark : {totalMark}</h5>
          <h5>Achieved Mark : {mark}</h5>
        </div>
      </div>
    </div>
  );
};

export default VideoQuizResult;
