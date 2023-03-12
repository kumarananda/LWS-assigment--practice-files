/** @format */

import React from "react";
import { useSelector } from "react-redux";

import Job from "../Job/Job";

function JobList() {
  const { jobs = [], isLoading, isError, error } = useSelector(state => state.jobs);
  const { salaryValue, titleQuary, jobType } = useSelector(state => state.filter);

  const filterByJobType = item => {
    if (jobType === "All Available") {
      return true;
    } else {
      return item.type === jobType;
    }
  };
  const filterByTitle = item => {
    if (!titleQuary) {
      return true;
    } else {
      return item.title.toLowerCase().includes(titleQuary.toLowerCase());
    }
  };
  const sortBySalaryValue = (a, b) => {
    if (salaryValue === "default") {
      return true;
    } else if (salaryValue === "lowToHigh") {
      return +a.salary - +b.salary;
    } else if (salaryValue === "highToLow") {
      return +b.salary - +a.salary;
    }
  };

  return (
    <>
      <div className="jobs-list">
        {jobs
          .filter(filterByJobType)
          .filter(filterByTitle)
          .sort(sortBySalaryValue)
          .map((job, i) => (
            <Job job={job} key={i} />
          ))}
      </div>
    </>
  );
}

export default JobList;
