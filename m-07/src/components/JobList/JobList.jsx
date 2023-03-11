/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fatchJobs } from "../../features/jobs/jobsSlice";
import Job from "../Job/Job";

function JobList() {
  const dispatch = useDispatch();
  const { jobs = [], isLoading, isError, error } = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(fatchJobs());
  }, [dispatch]);

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
