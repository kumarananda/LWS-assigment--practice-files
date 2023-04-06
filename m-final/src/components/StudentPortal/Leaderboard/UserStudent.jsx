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
      <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
        <thead>
          <tr>
            <th className="table-th !text-center">Rank</th>
            <th className="table-th !text-center">Name</th>
            <th className="table-th !text-center">Quiz Mark</th>
            <th className="table-th !text-center">Assignment Mark</th>
            <th className="table-th !text-center">Total</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-2 border-cyan">
            <td className="table-td text-center font-bold">{makeRanking(findUserStudent.grankTotal)}</td>
            <td className="table-td text-center font-bold">{findUserStudent.name}</td>
            <td className="table-td text-center font-bold">{findUserStudent.totalQuizMark}</td>
            <td className="table-td text-center font-bold">{findUserStudent.totalAssMark}</td>
            <td className="table-td text-center font-bold">{findUserStudent.grankTotal}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default UserStudent;
