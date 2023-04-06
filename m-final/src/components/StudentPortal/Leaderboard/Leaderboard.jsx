/** @format */

import React from "react";
import { useGetAssignmentMarksQuery } from "../../../features/api/assignmentMark/assignmentMarkApi";
import { useGetAllStudentsQuery } from "../../../features/api/students/studentsApi";
import { useGetAllQuizzesMarksQuery } from "../../../features/api/quizzesMark/quizzMarkApi";
import UserStudent from "./UserStudent";
import AllStudents from "./AllStudents";

const Leaderboard = () => {
  // students data
  const { data: students, isLoading: stuLoading, isError: stuError, isSuccess: stuSuccess, error: stuErrorData } = useGetAllStudentsQuery();
  // all students quizzis marks
  const { data: quizzesMarks, isLoading: qLoading, isSuccess: qSuccess, isError: qError, error: qErrorData } = useGetAllQuizzesMarksQuery();
  // all students assignments marks
  const { data: assMarks, isLoading: amLoading, isSuccess: amSuccess, isError: amError } = useGetAssignmentMarksQuery();

  // all student filter and rankink creation
  console.log("filtered");
  function filteringWithNewValue(students, quizzesMarks, assMarks) {
    const makeFild = students
      ?.map(stu => {
        const reduceFunMark = (acc, curr) => acc + Number(curr.totalMark);
        let quizMark = quizzesMarks?.filter(item => item.student_id === stu.id).reduce(reduceFunMark, 0);
        let assMark = assMarks?.filter(item => item.student_id === stu.id).reduce(reduceFunMark, 0);
        return {
          id: stu.id,
          name: stu.name,
          grankTotal: assMark + quizMark,
          totalQuizMark: quizMark,
          totalAssMark: assMark,
        };
      })
      ?.sort((a, b) => {
        return b.grankTotal - a.grankTotal;
      });

    return makeFild;
  }

  console.log();

  // content creation
  let allStudentContent = null;
  let userStudentContent = null;
  if (stuLoading || qLoading || amLoading) {
    allStudentContent = "Loading...";
    userStudentContent = "Loading...";
  } else {
    if (stuError || qError || amError) {
      allStudentContent = "Thare was an error";
      userStudentContent = "Thare was an error";
    } else {
      if (stuSuccess && qSuccess && amSuccess) {
        // filtered result
        const filteredStudents = filteringWithNewValue(students, quizzesMarks, assMarks);
        const unique = [];
        filteredStudents.map(x => (unique.filter(a => a.grankTotal == x.grankTotal).length > 0 ? null : unique.push(x)));
        const ranking = unique.map(u => u.grankTotal.toString());

        console.log(ranking);

        allStudentContent = <AllStudents students={filteredStudents} ranking={ranking} />;
        userStudentContent = <UserStudent students={filteredStudents} ranking={ranking} />;
      } else {
        allStudentContent = "Loading...";
        userStudentContent = "Loading...";
      }
    }
  }

  return (
    <>
      <div>
        <h3 className="text-lg font-bold">Your Position in Leaderboard</h3>

        {userStudentContent}
      </div>

      <div className="my-8">
        <h3 className="text-lg font-bold">Top 20 Result</h3>

        {allStudentContent}
      </div>
    </>
  );
};

export default Leaderboard;
