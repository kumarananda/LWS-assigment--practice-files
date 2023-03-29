/** @format */

import React from "react";
import learningportalImg from "../../../assets/image/learningportal.svg";
import StudentLoginForm from "../../../components/StudentLoginForm/StudentLoginForm";

const StudentLogin = () => {
  return (
    <>
      <section className="py-6 bg-primary h-screen grid place-items-center">
        <div className="mx-auto max-w-md px-5 lg:px-0">
          <div>
            <img className="h-12 mx-auto" src={learningportalImg} alt="Learning Portal" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">Sign in to Student Account</h2>
          </div>
          <StudentLoginForm />
        </div>
      </section>
    </>
  );
};

export default StudentLogin;