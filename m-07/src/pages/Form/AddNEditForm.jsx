/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { jobEditing } from "../../features/editingJob/jobEditingSlice";
import { addJob, editJob } from "../../features/jobs/jobsSlice";

function AddNEditForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobs } = useSelector(state => state.jobs);
  const { jobEdit, isEdit, isLoading, isError, error } = useSelector(state => state.jobEditing);

  const { edit, id } = useParams();

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const reset = () => {
    setTitle("");
    setType("");
    setSalary("");
    setDeadline("");
  };

  const handleAddJob = e => {
    e.preventDefault();
    dispatch(addJob({ title, type, salary, deadline }));
    reset();
    e.target.reset();
  };
  const handleEditJob = e => {
    e.preventDefault();
    dispatch(editJob({ id, data: { title, type, salary, deadline } }));
    reset();
    e.target.reset();
    navigate("/");
  };

  const setEditFormData = edit => {
    setTitle(edit.title);
    setType(edit.type);
    setSalary(edit.salary);
    setDeadline(edit.deadline);
  };
  useEffect(() => {
    if (edit === "edit") {
      setEditFormData(jobEdit);
    } else {
      reset();
    }
  }, [jobEdit]);

  // watch edit form data
  useEffect(() => {
    if (edit === "edit") {
      dispatch(jobEditing(id));
    } else {
      reset();
    }
  }, [dispatch]);

  return (
    <>
      <div className="lg:pl-[14rem] mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <h1 className="mb-10 text-center lws-section-title">{edit === "edit" ? "Edit" : "Add New"} Job</h1>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={edit === "edit" ? handleEditJob : handleAddJob} className="space-y-6">
              <div className="fieldContainer">
                <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">
                  Job Title
                </label>
                <select onChange={e => setTitle(e.target.value)} value={title} id="lws-JobTitle" name="lwsJobTitle" required>
                  <option value="" hidden>
                    Select Job
                  </option>
                  <option>Software Engineer</option>
                  <option>Software Developer</option>
                  <option>Full Stack Developer</option>
                  <option>MERN Stack Developer</option>
                  <option>DevOps Engineer</option>
                  <option>QA Engineer</option>
                  <option>Product Manager</option>

                  <option>Social Media Manager</option>
                  <option>Senior Executive</option>
                  <option>Junior Executive</option>
                  <option>Android App Developer</option>
                  <option>IOS App Developer</option>
                  <option>Frontend Developer</option>
                  <option>Frontend Engineer</option>
                </select>
              </div>

              <div className="fieldContainer">
                <label htmlFor="lws-JobType">Job Type</label>
                <select onChange={e => setType(e.target.value)} value={type} id="lws-JobType" name="lwsJobType" required>
                  <option value="" hidden>
                    Select Job Type
                  </option>
                  <option>Full Time</option>
                  <option>Internship</option>
                  <option>Remote</option>
                </select>
              </div>

              <div className="fieldContainer">
                <label htmlFor="lws-JobSalary">Salary</label>
                <div className="flex border rounded-md shadow-sm border-slate-600">
                  <span className="input-tag">BDT</span>
                  <input
                    onChange={e => setSalary(e.target.value)}
                    value={salary}
                    type="number"
                    name="lwsJobSalary"
                    id="lws-JobSalary"
                    required
                    className="!rounded-l-none !border-0"
                    placeholder="20,00,000"
                  />
                </div>
              </div>

              <div className="fieldContainer">
                <label htmlFor="lws-JobDeadline">Deadline</label>
                <input
                  defaultValue={deadline}
                  onChange={e => setDeadline(e.target.value)}
                  type="date"
                  name="lwsJobDeadline"
                  id="lws-JobDeadline"
                  required
                />
              </div>

              <div className="text-right">
                <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                  {edit === "edit" ? "Edit" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default AddNEditForm;
