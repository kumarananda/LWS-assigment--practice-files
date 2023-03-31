/** @format */

import React from "react";
import Header from "../../../components/Header/Header";
import Quizzes from "../../../components/AdminPortal/Quizzes/Quizzes";

const QuizzesPage = () => {
  return (
    <>
      <Header />
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <Quizzes />
        </div>
      </section>
    </>
  );
};

export default QuizzesPage;
