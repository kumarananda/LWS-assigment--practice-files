/** @format */

import React from "react";

const AllStudents = ({ students, ranking }) => {
  const makeRanking = totalMark => {
    return ranking?.indexOf(totalMark.toString()) + 1;
  };
  return (
    <>
      <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
        <thead>
          <tr className="border-b border-slate-600/50">
            <th className="table-th !text-center">Rank</th>
            <th className="table-th !text-center">Name</th>
            <th className="table-th !text-center">Quiz Mark</th>
            <th className="table-th !text-center">Assignment Mark</th>
            <th className="table-th !text-center">Total</th>
          </tr>
        </thead>

        <tbody>
          {students.map(stu => {
            if (makeRanking(stu.grankTotal) <= 20) {
              return (
                <tr key={stu.id} className="border-b border-slate-600/50 ">
                  <td className="table-td text-center">{makeRanking(stu.grankTotal)}</td>
                  <td className="table-td text-center">{stu.name}</td>
                  <td className="table-td text-center">{stu.totalQuizMark}</td>
                  <td className="table-td text-center">{stu.totalAssMark}</td>
                  <td className="table-td text-center">{stu.grankTotal}</td>
                </tr>
              );
            } else {
              return;
            }
          })}
        </tbody>
      </table>
    </>
  );
};

export default AllStudents;
