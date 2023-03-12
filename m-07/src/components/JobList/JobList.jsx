/** @format */

import React from "react";
import { useSelector } from "react-redux";

import Job from "../Job/Job";

function JobList() {
  const { jobs = [], isLoading, isError, error } = useSelector(state => state.jobs);

  return (
    <>
      <div className="jobs-list">
        {jobs.map((job, i) => (
          <Job job={job} key={i} />
        ))}
      </div>
    </>
  );
}

export default JobList;
