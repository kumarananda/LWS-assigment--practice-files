/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProjectsQuery } from "../features/api/projects/projectsApi";
import { addProductShowItems, removeProductShowItems } from "../features/api/projects/projectsSlice";

function ProjectsList() {
  const { data: projects, isLoading, isSuccess, isError } = useGetProjectsQuery();
  const { shows } = useSelector(state => state.projectShows);
  const dispatch = useDispatch();

  const handleProjectShow = (e, value) => {
    if (e.target.checked) {
      dispatch(addProductShowItems(value));
    } else {
      dispatch(removeProductShowItems(value));
    }
  };

  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>There was an error!</div>;
  }
  if (!isLoading && !isError && isSuccess) {
    if (projects?.length === 0) {
      content = <div>Project not found</div>;
    } else if (projects.length > 0) {
      content = projects?.map(project => (
        <div className="checkbox-container" key={project.id}>
          <input
            id={"project" + project.id}
            onChange={e => handleProjectShow(e, project.projectName)}
            type="checkbox"
            className={`${project.colorClass}`}
            checked={shows.includes(project.projectName)}
          />
          <label htmlFor={"project" + project.id} className="label">
            {project.projectName}
          </label>
        </div>
      ));
    }
  }

  return (
    <>
      {/* Projects List  */}
      <div>
        <h3 className="text-xl font-bold">Projects</h3>
        <div className="mt-3 space-y-4">{content}</div>
      </div>
    </>
  );
}

export default ProjectsList;
