/** @format */

import React from "react";

const AllStudents = ({ students, ranking }) => {
  const makeRanking = totalMark => {
    return ranking?.indexOf(totalMark.toString()) + 1;
  };
  return (
    <>
      <tbody>
        {students.map(stu => {
          if (makeRanking(stu.grandTotal) <= 20) {
            return (
              <tr key={stu.id} className="border-b border-slate-600/50 ">
                <td className="table-td text-center">{makeRanking(stu.grandTotal)}</td>
                <td className="table-td text-center">{stu.name}</td>
                <td className="table-td text-center">{stu.totalQuizMark}</td>
                <td className="table-td text-center">{stu.totalAssMark}</td>
                <td className="table-td text-center">{stu.grandTotal}</td>
              </tr>
            );
          } else {
            return;
          }
        })}
      </tbody>
    </>
  );
};

export default AllStudents;
