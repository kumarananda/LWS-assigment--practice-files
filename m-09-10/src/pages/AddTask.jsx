/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProjectsQuery } from "../features/api/projects/projectsApi";
import { useGetMembersQuery } from "../features/members/membersApi";
import { useAddTasksMutation } from "../features/tasks/tasksApi";

function AddTask() {
  const navigate = useNavigate();
  const { data: projects, isLoading: projectsLoading, isError: projectsError, isSuccess: projectsSuccess } = useGetProjectsQuery();
  const { data: team, isLoading: teamLoading, isError: teamError, isSuccess: teamSuccess } = useGetMembersQuery();

  const [addTasks, { isLoading, isError }] = useAddTasksMutation();

  let teamOptions = null;
  if (!teamLoading && !teamError && teamSuccess) {
    teamOptions = team.map(item => (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    ));
  }

  let projectOptions = null;
  if (!projectsLoading && !projectsError && projectsSuccess) {
    projectOptions = projects.map(item => (
      <option value={item.id} key={item.id}>
        {item.projectName}
      </option>
    ));
  }
  //deadline, project, teamMember, taskName,
  const [taskForm, setTaskForm] = useState({
    deadline: "",
    project: "",
    teamMember: "",
    taskName: "",
  });
  const handleTaskData = e => {
    setTaskForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddTaskSubmit = async e => {
    e.preventDefault();

    const selectedProject = projects.find(item => item.id === +taskForm.project);
    const selectedMember = team?.find(item => item.id === +taskForm.teamMember);

    addTasks({
      ...taskForm,
      project: selectedProject,
      teamMember: selectedMember,
    }).then(res => {
      if (res.data.id) {
        e.target.reset();
        setTaskForm({
          deadline: "",
          project: "",
          teamMember: "",
          taskName: "",
        });
        navigate("/");
      }
    });
  };

  return (
    <>
      <div className="text-[#111827]">
        <div className="container relative">
          <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
            <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">Create Task for Your Team</h1>

            <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
              <form onSubmit={handleAddTaskSubmit} className="space-y-6">
                <div className="fieldContainer">
                  <label htmlFor="lws-taskName">Task Name</label>
                  <input
                    value={taskForm.taskName}
                    onChange={handleTaskData}
                    type="text"
                    name="taskName"
                    id="lws-taskName"
                    required
                    placeholder="Implement RTK Query"
                  />
                </div>

                <div className="fieldContainer">
                  <label htmlFor="lws-teamMember">Assign To</label>
                  <select defaultValue={taskForm.teamMember} onChange={handleTaskData} name="teamMember" id="lws-teamMember" required>
                    <option value="" hidden>
                      Select Job
                    </option>
                    {/* created */}
                    {teamOptions}
                  </select>
                </div>
                <div className="fieldContainer">
                  <label htmlFor="lws-projectName">Project Name</label>
                  <select defaultValue={taskForm.project} onChange={handleTaskData} id="lws-projectName" name="project" required>
                    <option value="" hidden>
                      Select Project
                    </option>
                    {/* created */}
                    {projectOptions}
                  </select>
                </div>

                <div className="fieldContainer">
                  <label htmlFor="lws-deadline">Deadline</label>
                  <input value={taskForm.deadline} onChange={handleTaskData} type="date" name="deadline" id="lws-deadline" required />
                </div>

                <div className="text-right">
                  <button type="submit" className="lws-submit">
                    Save
                  </button>
                </div>
                {isError && <div style={{ color: "red" }}>Thare was an error</div>}
                {isLoading && <div style={{ color: "green" }}>Data Updating...</div>}
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default AddTask;
