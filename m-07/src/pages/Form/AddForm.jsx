/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addJob } from "../../features/jobs/jobsSlice";
import createTost from "../../utils/tost";

function AddForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    dispatch(addJob({ title, type, salary, deadline })).then(res => {
      if (res.type === "jobs/addJob/fulfilled") {
        reset();
        e.target.reset();
        createTost("Data add successful", "success");
        navigate("/");
      } else if (res.type === "jobs/addJob/rejected") {
        createTost(res.error?.message);
      }
    });
  };

  return (
    <>
      <div className="lg:pl-[14rem] mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <h1 className="mb-10 text-center lws-section-title">{"Add New"} Job</h1>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleAddJob} className="space-y-6">
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
                  {"Add"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default AddForm;
