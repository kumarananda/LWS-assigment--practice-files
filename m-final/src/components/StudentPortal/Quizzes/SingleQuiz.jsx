/** @format */

import React, { useState } from "react";

const SingleQuiz = ({ quiz, index }) => {
  const { id, question, options = [], video_id } = quiz || {};

  const [selectedAns, setSelectedAns] = useState({ option1: false, option2: false, option3: false, option4: false });

  const handleGetAns = e => {
    setSelectedAns(prev => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  return (
    <>
      <div className="quiz">
        <h6 className="question" style={{ fontSize: "15px" }}>
          {question}
        </h6>
        <div className="quizOptions">
          {options.map((opt, optIndex) => (
            <label key={opt.id}>
              <input onChange={handleGetAns} type="checkbox" name={`option${optIndex + 1}`} />
              {opt.option}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleQuiz;
