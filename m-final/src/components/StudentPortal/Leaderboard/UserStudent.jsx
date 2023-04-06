/** @format */

import React from "react";
import { useSelector } from "react-redux";

const UserStudent = ({ students = [], ranking = [] }) => {
  // user data
  const { id: student_id, name: student_name } = useSelector(state => state.auth.user);

  const findUserStudent = students.filter(stu => stu.id === student_id)[0];
  console.log(findUserStudent);

  const makeRanking = totalMark => {
    return ranking?.indexOf(totalMark.toString()) + 1;
  };

  return (
    <>
      <tbody>
        <tr className="border-2 border-cyan">
          <td className="table-td text-center font-bold">{makeRanking(findUserStudent.grandTotal)}</td>
          <td className="table-td text-center font-bold">{findUserStudent.name}</td>
          <td className="table-td text-center font-bold">{findUserStudent.totalQuizMark}</td>
          <td className="table-td text-center font-bold">{findUserStudent.totalAssMark}</td>
          <td className="table-td text-center font-bold">{findUserStudent.grandTotal}</td>
        </tr>
      </tbody>
    </>
  );
};

export default UserStudent;
