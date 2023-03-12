/** @format */

import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/ui/Loading.js";
import NetError from "../../components/ui/NetError.js";
import NotFound from "../../components/ui/NotFound.js";

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

  let content;

  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <NetError>{error}</NetError>;
  }
  if (!isLoading && !isError && jobs.length === 0) {
    content = <NotFound>No post found</NotFound>;
  }
  if (!isLoading && !isError && jobs.length > 0) {
    const filtered = jobs.filter(filterByJobType).filter(filterByTitle).sort(sortBySalaryValue).length;
    if (filtered === 0) {
      content = <NotFound>No jobs to show</NotFound>;
    } else {
      content = jobs
        .filter(filterByJobType)
        .filter(filterByTitle)
        .sort(sortBySalaryValue)
        .map((job, i) => <Job job={job} key={i} />);
    }
  }

  return (
    <>
      <div className="jobs-list">
        {content}
        {/* {jobs
          .filter(filterByJobType)
          .filter(filterByTitle)
          .sort(sortBySalaryValue)
          .map((job, i) => (
            <Job job={job} key={i} />
          ))} */}
      </div>
    </>
  );
}

export default JobList;
