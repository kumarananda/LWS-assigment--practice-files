/** @format */

import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetProjectsQuery } from "../features/api/projects/projectsApi";
import { useGetMembersQuery } from "../features/members/membersApi";
import { useGetSingleTaskQuery } from "../features/tasks/tasksApi";

function EditTask() {
  const { editId } = useParams();
  // const dispatch = useDispatch();
  const { data: projects, isLoading: projectsLoading, isError: projectsError, isSuccess: projectsSuccess } = useGetProjectsQuery();
  const { data: team, isLoading: teamLoading, isError: teamError, isSuccess: teamSuccess } = useGetMembersQuery();

  const { data: singleTask, isSuccess, isLoading } = useGetSingleTaskQuery(editId);
  const { project, teamMember } = singleTask || {};

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

  let teamOptions = null;
  if (!teamLoading && !teamError && teamSuccess) {
    teamOptions = team.map(item => (
      <option selected={taskForm.teamMember === item.id} value={item.id} key={item.id}>
        {item.name}
      </option>
    ));
  }

  let projectOptions = null;
  if (!projectsLoading && !projectsError && projectsSuccess) {
    projectOptions = projects.map(item => (
      <option selected={taskForm.project === item.id} value={item.id} key={item.id}>
        {item.projectName}
      </option>
    ));
  }

  useEffect(() => {
    if (isSuccess) {
      setTaskForm({
        ...singleTask,
        teamMember: teamMember.id,
        project: project.id,
      });
    }
  }, [isSuccess]);

  console.log(taskForm);

  const handleEditTaskSubmit = async e => {
    e.preventDefault();

    const selectedProject = projects.find(item => item.id === +taskForm.project);
    const selectedMember = team?.find(item => item.id === +taskForm.teamMember);

    // addTasks({
    //   ...taskForm,
    //   project: selectedProject,
    //   teamMember: selectedMember,
    // }).then(res => {
    //   if (res.data.id) {
    //     e.target.reset();
    //     setTaskForm({
    //       deadline: "",
    //       project: "",
    //       teamMember: "",
    //       taskName: "",
    //     });
    //   }
    // });
  };

  return (
    <>
      <div className="text-[#111827]">
        <div className="container relative">
          <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
            <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">Edit Task</h1>

            <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
              {isLoading && <div>Loadind...</div>}
              {isSuccess && (
                <form onSubmit={handleEditTaskSubmit} className="space-y-6">
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
                      Update
                    </button>
                  </div>
                  {/* {isError && <div style={{ color: "red" }}>Thare was an error</div>} */}
                </form>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default EditTask;
